package com.wix.detox.adapters.server

import android.content.Context
import androidx.test.espresso.IdlingResource
import com.nhaarman.mockitokotlin2.*
import com.wix.detox.TestEngineFacade
import com.wix.detox.UTHelpers.yieldToOtherThreads
import com.wix.detox.instruments.DetoxInstrumentsException
import com.wix.detox.instruments.DetoxInstrumentsManager
import com.wix.detox.reactnative.idlingresources.DescriptiveIdlingResource
import com.wix.detox.reactnative.idlingresources.IdlingResourceDescription
import com.wix.invoke.MethodInvocation
import org.assertj.core.api.Assertions
import org.json.JSONObject
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe
import java.lang.reflect.InvocationTargetException
import java.util.*
import java.util.concurrent.Executors

val mockErrorParser = { error: Throwable? -> "mockErrorParser($error)" }

object DetoxActionHandlersSpec : Spek({
    describe("Action handlers") {
        val params = "{\"mock\": \"params\"}"
        val messageId = 666L

        lateinit var appContext: Context
        lateinit var outboundServerAdapter: OutboundServerAdapter
        lateinit var testEngineFacade: TestEngineFacade

        beforeEachTest {
            appContext = mock()
            outboundServerAdapter = mock()

            testEngineFacade = mock()
            whenever(testEngineFacade.awaitIdle()).then {
                synchronized(testEngineFacade) {}
            }
            whenever(testEngineFacade.syncIdle()).then {
                synchronized(testEngineFacade) {}
            }
        }

        describe("Ready action") {
            fun uut() = ReadyActionHandler(outboundServerAdapter, testEngineFacade)

            it("should reply with a 'ready' ACK if ready") {
                uut().handle(params, messageId)
                verify(outboundServerAdapter).sendMessage(eq("ready"), eq(Collections.emptyMap<String, Any>()), eq(messageId))
            }

            it("should block waiting for idle before ACK-ing") {
                val executor = Executors.newSingleThreadExecutor()

                synchronized(testEngineFacade) {
                    executor.submit {
                        uut().handle(params, messageId)
                    }
                    yieldToOtherThreads(executor)
                    verify(testEngineFacade).awaitIdle()
                    verify(outboundServerAdapter, never()).sendMessage(any(), any(), any())
                }
                yieldToOtherThreads(executor)
                verify(outboundServerAdapter, times(1)).sendMessage(any(), any(), any())
            }
        }

        describe("React-native reload action") {
            fun uut() = ReactNativeReloadActionHandler(appContext, outboundServerAdapter, testEngineFacade)

            it("should reload the app") {
                uut().handle(params, messageId)
                verify(testEngineFacade).reloadReactNative(appContext)
            }

            it("should reply with a 'ready' ACK when ready") {
                uut().handle(params, messageId)
                verify(outboundServerAdapter).sendMessage(eq("ready"), eq(emptyMap<String, Any>()), eq(messageId))
            }

            it("should sync before ACK-ing") {
                val executor = Executors.newSingleThreadExecutor()

                synchronized(testEngineFacade) {
                    executor.submit {
                        uut().handle(params, messageId)
                    }
                    yieldToOtherThreads(executor)
                    verify(testEngineFacade).syncIdle()
                    verify(testEngineFacade, never()).reloadReactNative(any())
                    verify(outboundServerAdapter, never()).sendMessage(any(), any(), any())
                }
                yieldToOtherThreads(executor)
                verify(testEngineFacade, times(1)).reloadReactNative(eq(appContext))
                verify(outboundServerAdapter, times(1)).sendMessage(any(), any(), any())
            }
        }

        describe("query status") {
            fun queryStatusHandler() = QueryStatusActionHandler(outboundServerAdapter, testEngineFacade)

            it("should return idle app status") {
                queryStatusHandler().handle(params, messageId)
                val expectedData =  mapOf("status" to mapOf("app_status" to "idle"))
                verify(outboundServerAdapter).sendMessage(eq("currentStatusResult"), eq(expectedData), eq(messageId))
            }

            fun createMockedDescriptiveResource(description: IdlingResourceDescription):
                    DescriptiveIdlingResource {
                val resource: DescriptiveIdlingResource = mock()
                whenever(resource.getDescription()).thenReturn(description)
                return resource
            }

            it("should return busy app status with descriptive resource") {
                val fakeDescription = IdlingResourceDescription.Builder()
                    .name("foo")
                    .addDescription("bar", "baz")
                    .addDescription("qux", "quux")
                    .build();

                val busyResources: List<IdlingResource> = listOf(
                    createMockedDescriptiveResource(fakeDescription)
                )
                whenever(testEngineFacade.getBusyIdlingResources()).thenReturn(busyResources)

                queryStatusHandler().handle(params, messageId)

                val expectedBusyResourceDescription = listOf(
                    mapOf("name" to "foo", "description" to mapOf("bar" to "baz", "qux" to "quux"))
                )
                val expectedData =  mapOf("status" to mapOf("app_status" to "busy", "busy_resources" to expectedBusyResourceDescription))
                verify(outboundServerAdapter).sendMessage(eq("currentStatusResult"), eq(expectedData), eq(messageId))
            }

            abstract class LooperIdlingResource: IdlingResource {
                abstract val thread: String?
            }

            fun createMockedLooperIdlingResource(resourceName: String): LooperIdlingResource {
                val resource: LooperIdlingResource = mock()
                whenever(resource.name).thenReturn(resourceName)
                return resource
            }

            it("should return busy app status with looper resources") {
                val busyResources: List<IdlingResource> = listOf(
                    createMockedLooperIdlingResource("mqt_js"),
                    createMockedLooperIdlingResource("mqt_native"),
                    createMockedLooperIdlingResource("unmapped")
                )
                whenever(testEngineFacade.getBusyIdlingResources()).thenReturn(busyResources)

                queryStatusHandler().handle(params, messageId)

                val expectedBusyResourceDescription = listOf(
                    mapOf("name" to "looper", "description" to mapOf("thread" to "\"mqt_js\" (JS Thread)", "execution_type" to "JavaScript code")),
                    mapOf("name" to "looper", "description" to mapOf("thread" to "\"mqt_native\" (Native Modules Thread)", "execution_type" to "native module calls")),
                    mapOf("name" to "looper", "description" to mapOf("thread" to "\"unmapped\""))
                )
                val expectedData =  mapOf("status" to mapOf("app_status" to "busy", "busy_resources" to expectedBusyResourceDescription))
                verify(outboundServerAdapter).sendMessage(eq("currentStatusResult"), eq(expectedData), eq(messageId))
            }

            fun createMockedIdlingResource(name: String): IdlingResource {
                val resource: IdlingResource = mock()
                whenever(resource.name).thenReturn(name)
                return resource
            }

            it("should return busy app status with unknown resource") {
                val busyResources: List<IdlingResource> = listOf(
                    createMockedIdlingResource( "quux")
                )
                whenever(testEngineFacade.getBusyIdlingResources()).thenReturn(busyResources)

                queryStatusHandler().handle(params, messageId)

                val expectedBusyResourceDescription = listOf(
                    mapOf("name" to "unknown", "description" to mapOf("identifier" to "quux")),
                )
                val expectedData =  mapOf("status" to mapOf("app_status" to "busy", "busy_resources" to expectedBusyResourceDescription))
                verify(outboundServerAdapter).sendMessage(eq("currentStatusResult"), eq(expectedData), eq(messageId))
            }
        }

        describe("Invoke actions") {
            lateinit var methodInvocationMock: MethodInvocation

            fun uut() = InvokeActionHandler(methodInvocationMock, outboundServerAdapter, mockErrorParser)

            beforeEachTest {
                methodInvocationMock = mock()
            }

            it("should invoke the right target") {
                uut().handle(params, messageId)
                verify(methodInvocationMock).invoke(params)
            }

            it("should reply with an 'invokeResult' ACK") {
                uut().handle(params, messageId)
                verify(outboundServerAdapter).sendMessage(eq("invokeResult"), any(), eq(messageId))
            }

            it("should reply with empty result data") {
                uut().handle(params, messageId)

                verify(outboundServerAdapter).sendMessage(any(), argThat { size == 1 && this["result"] == null }, any())
            }

            it("should reply with actual result data") {
                val someResult = "some_result"
                whenever(methodInvocationMock.invoke(isA<String>())).thenReturn(someResult)
                uut().handle(params, messageId)

                verify(outboundServerAdapter).sendMessage(any(), argThat { size == 1 && this["result"] == someResult }, any())
            }

            it("should handle runtime errors") {
                val exception = IllegalStateException("mock-error-reason")
                whenever(methodInvocationMock.invoke(isA<String>())).thenThrow(exception)

                uut().handle(params, messageId)

                verify(outboundServerAdapter).sendMessage(
                        eq("error"),
                        argThat { size == 1 && this["error"] == "mockErrorParser(${exception})\nCheck device logs for full details!\n" },
                        eq(messageId))
            }

            it("should handle an InvocationTargetException and extract view hierarchy") {
                val targetException = Exception("before View Hierarchy: after")
                val exception = InvocationTargetException(targetException)
                whenever(methodInvocationMock.invoke(isA<String>())).thenThrow(exception)

                uut().handle(params, messageId)

                verify(outboundServerAdapter).sendMessage(
                        eq("testFailed"),
                        argThat {
                            this["details"] == "before\n" &&
                            this["viewHierarchy"] == "after" &&
                            size == 2
                        },
                        eq(messageId))
            }

            it("should handle a non-view-hierarchy InvocationTargetException") {
                val rootException = RuntimeException("root-exception-mock")
                val targetException = Exception("target-exception-mock", rootException)
                val exception = InvocationTargetException(targetException)
                whenever(methodInvocationMock.invoke(isA<String>())).thenThrow(exception)

                uut().handle(params, messageId)

                verify(outboundServerAdapter).sendMessage(
                        eq("testFailed"),
                        argThat {
                            this["details"] == "root-exception-mock" &&
                            size == 1
                        },
                        eq(messageId))

            }
        }

        describe("InstrumentsRecording recording state actions") {
            lateinit var instrumentsManager: DetoxInstrumentsManager

            fun uut() = InstrumentsRecordingStateActionHandler(instrumentsManager, outboundServerAdapter)

            beforeEachTest {
                instrumentsManager = mock()
            }

            it("should start recording with path") {
                uut().handle("{\"recordingPath\":\"/MockPath\", \"samplingInterval\":100500}", messageId)
                verify(instrumentsManager).startRecordingAtLocalPath(eq("/MockPath"), eq(100500L))
            }

            it("should start recording with path and default samplingInterval") {
                uut().handle("{\"recordingPath\":\"/MockPath\"}", messageId)
                verify(instrumentsManager)
                        .startRecordingAtLocalPath(
                                eq("/MockPath"),
                                eq(InstrumentsRecordingStateActionHandler.DEFAULT_SAMPLING_INTERVAL)
                        )
            }

            it("should stop recording without path") {
                uut().handle("{\"recordingPath\":null}", messageId)
                verify(instrumentsManager).stopRecording()
            }

            it("should reply with a 'done' ACK on set state finish") {
                uut().handle(params, messageId)
                verify(outboundServerAdapter).sendMessage(eq("setRecordingStateDone"), any(), eq(messageId))
            }
        }

        describe("InstrumentsRecording events actions") {
            lateinit var instrumentsManager: DetoxInstrumentsManager
            val mockCategory = "MockCategory"
            val mockName = "MockName"
            val mockId = "MockId"
            val mockAdditionalInfo = "MockAdditionalInfo"
            val mockStatus = "MockStatus"

            fun uut() = InstrumentsEventsActionsHandler(instrumentsManager, outboundServerAdapter)

            beforeEachTest {
                instrumentsManager = mock()
            }

            describe("begin interval") {
                val json = with(JSONObject()) {
                    put("category", mockCategory)
                    put("name", mockName)
                    put("id", mockId)
                    put("additionalInfo", mockAdditionalInfo)
                    put("action", "begin")
                }.toString()

                it("should invoke instrumentation") {
                    uut().handle(json, messageId)
                    verify(instrumentsManager).eventBeginInterval(
                            eq(mockCategory),
                            eq(mockName),
                            eq(mockId),
                            eq(mockAdditionalInfo)
                    )
                }

                it("should reply with a 'done' ACK") {
                    uut().handle(json, messageId)
                    verify(outboundServerAdapter).sendMessage(eq("eventDone"), any(), eq(messageId))
                }
            }

            describe("end interval") {
                val json = with(JSONObject()) {
                    put("id", mockId)
                    put("status", mockStatus)
                    put("additionalInfo", mockAdditionalInfo)
                    put("action", "end")
                }.toString()

                it("should invoke instrumentation") {
                    uut().handle(json, messageId)
                    verify(instrumentsManager).eventEndInterval(
                            eq(mockId),
                            eq(mockStatus),
                            eq(mockAdditionalInfo)
                    )
                }

                it("should reply with a 'done' ACK") {
                    uut().handle(json, messageId)
                    verify(outboundServerAdapter).sendMessage(eq("eventDone"), any(), eq(messageId))
                }
            }

            describe("mark") {
                val json = with(JSONObject()) {
                    put("category", mockCategory)
                    put("name", mockName)
                    put("id", mockId)
                    put("status", mockStatus)
                    put("additionalInfo", mockAdditionalInfo)
                    put("action", "mark")
                }.toString()

                it("should invoke instrumentation") {
                    uut().handle(json, messageId)
                    verify(instrumentsManager).eventMark(
                            eq(mockCategory),
                            eq(mockName),
                            eq(mockId),
                            eq(mockStatus),
                            eq(mockAdditionalInfo)
                    )
                }

                it("should reply with a 'done' ACK") {
                    uut().handle(json, messageId)
                    verify(outboundServerAdapter).sendMessage(eq("eventDone"), any(), eq(messageId))
                }
            }

            it("wrong event action") {
                val json = with(JSONObject()) {
                    put("action", "wrong")
                }.toString()

                var err: Exception? = null
                try {
                    uut().handle(json, messageId)
                } catch (e: DetoxInstrumentsException) {
                    err = e
                }
                Assertions.assertThat(err).isNotNull()
                Assertions.assertThat(err).hasMessage("Invalid action")
            }
        }
    }
})
