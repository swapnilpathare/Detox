"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9780],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),o=n(67294),i=n(86010),r=n(12466),s=n(16550),l=n(91980),p=n(67392),d=n(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,p]=g({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=l??u;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,i]),tabValues:i}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==s&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},r,{className:(0,i.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=k(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},o.createElement(f,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return o.createElement(x,(0,a.Z)({key:String(t)},e))}},2823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>j,default:()=>P,frontMatter:()=>A,metadata:()=>E,toc:()=>X});var a=n(87462),o=n(67294),i=n(3905),r=n(90814),s=n(74866),l=n(85162);const p={toc:[]},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/detox")," and extract ",(0,i.kt)("inlineCode",{parentName:"p"},"Detox-ios-src.tbz")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"extracted detox-ios-src directory",src:n(63981).Z,width:"817",height:"460"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Drag ",(0,i.kt)("inlineCode",{parentName:"p"},"Detox-ios-src/Detox.xcodeproj")," into your Xcode project"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Detox inside Xcode project",src:n(89584).Z,width:"269",height:"284"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to your project settings \u2192 ",(0,i.kt)("strong",{parentName:"p"},"General")," and add ",(0,i.kt)("strong",{parentName:"p"},"Detox.framework")," to ",(0,i.kt)("strong",{parentName:"p"},"Frameworks, Libraries, and Embedded Content")," (make sure ",(0,i.kt)("strong",{parentName:"p"},"Embed & Sign")," is selected under ",(0,i.kt)("strong",{parentName:"p"},"Embed"),")"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"embed Detox",src:n(18739).Z,width:"675",height:"230"})))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Apps should not be submitted to the App Store with the Detox framework linked. Follow this guide only to debug Detox issues in your project. Once finished, make sure to remove ",(0,i.kt)("strong",{parentName:"p"},"Detox.framework")," from your project.")))}u.isMDXComponent=!0;const c={toc:[]},m="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add in your Android project settings:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/settings.gradle"',title:'"android/settings.gradle"'},"+include ':detox'\n+project(':detox').projectDir = new File(rootProject.projectDir, '../node_modules/detox/android/detox')\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your ",(0,i.kt)("em",{parentName:"p"},"root")," build script register ",(0,i.kt)("inlineCode",{parentName:"p"},"google()")," as a repository lookup point in all projects:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/build.gradle"',title:'"android/build.gradle"'}," allprojects {\n     repositories {\n         // ...\n+        google()\n     }\n }\n")),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"allprojects")," section doesn't exist, then add it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your app\u2019s build script, add to ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," section:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},' dependencies {\n     // ...\n+    androidTestImplementation(project(path: ":detox"))\n }\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stay in that file, just scroll down and add to the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultConfig")," subsection:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'}," android {\n   // ...\n\n   defaultConfig {\n       // ...\n+      testBuildType System.getProperty('testBuildType', 'debug')  // This will later be used to control the test apk build type\n+      testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'\n+      missingDimensionStrategy 'detox', 'full'\n   }\n }\n")))))}g.isMDXComponent=!0;const k={toc:[]},h="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": {\n    "simulator": {\n      "type": "ios.simulator",\n      "device": {\n        "type": "<e.g., iPhone 12 Pro>"\n      }\n    }\n  },\n  "apps": {\n    "ios.debug": {\n      "type": "ios.app",\n      "binaryPath": "<path to your app binary built before>"\n    }\n  },\n  "configurations": {\n// highlight-start\n    "ios.manual": {\n      "device": "simulator",\n      "app": "ios.debug",\n      "behavior": {\n        "launchApp": "manual"\n      }\n    }\n// highlight-end\n  }\n}\n')))}b.isMDXComponent=!0;const f={toc:[]},y="wrapper";function x(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": {\n    "emulator": {\n      "type": "android.emulator",\n      "device": {\n        "avdName": "<e.g., Pixel_API_28>"\n      }\n    }\n  },\n  "apps": {\n    "android.debug": {\n      "type": "android.apk",\n      "binaryPath": "<path to your app binary built before>"\n    }\n  },\n  "configurations": {\n// highlight-start\n    "android.manual": {\n      "device": "emulator",\n      "app": "android.debug",\n      "behavior": {\n        "launchApp": "manual"\n      }\n    }\n// highlight-end\n  }\n}\n')))}x.isMDXComponent=!0;const N={toc:[]},v="wrapper";function w(e){let{components:t,...o}=e;return(0,i.kt)(v,(0,a.Z)({},N,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"18:26:07.024 detox[45214] i Waiting for you to manually launch your app in Xcode.\nMake sure to pass the launch arguments listed below:\n  -detoxServer ws://localhost:8099\n  -detoxSessionId com.wix.detox-example\n\nPress any key to continue...\n")),(0,i.kt)("p",null,"You\u2019ll need to run your app with the said arguments from Xcode:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Xcode - Edit Schema - Arguments tab",src:n(47470).Z,width:"897",height:"505"})),(0,i.kt)("p",null,"Before you launch the app, make sure to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/setting-breakpoints-to-pause-your-running-app"},"put breakpoints")," at the points of interest, e.g.:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"put a breakpoint in the native code",src:n(32516).Z,width:"457",height:"88"})),(0,i.kt)("p",null,"Launch the app with the debugger attached:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"launching the app",src:n(50328).Z,width:"420",height:"882"})),(0,i.kt)("p",null,"The moment you see the app is idle, go back to the Terminal where Detox is running\nand press any key. If you wish to terminate the process for some reason, use Ctrl+C.\nIn a couple of seconds you are expected to see a confirmation from Detox, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Found the app (com.wix.detox-example) with process ID = 16854. Proceeding...\n")),(0,i.kt)("p",null,"Now the entire test will run as usual until it sends an action to the app, which gets trapped\nin your breakpoint."),(0,i.kt)("p",null,"Happy debugging!"))}w.isMDXComponent=!0;const T={toc:[]},D="wrapper";function C(e){let{components:t,...o}=e;return(0,i.kt)(D,(0,a.Z)({},T,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"18:26:07.024 detox[45214] i Waiting for you to manually launch your app in Android Studio.\n\nInstrumentation class: com.wix.detox.test.test/com.example.DetoxTestAppJUnitRunner\nInstrumentation arguments:\n------------------------------------\nKey            | Value\n------------------------------------\ndetoxServer    | ws://localhost:8099\ndetoxSessionId | test\n------------------------------------\n\nPress any key to continue...\n")),(0,i.kt)("p",null,"Now it is time to switch back to Android Studio. You\u2019ll need to run your instrumentation runner with the said arguments,\nthis is why you should create a debug configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"Android Instrumented Tests")," type similar to the one below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android Debug Configuration - Android Instrumented Tests",src:n(70310).Z,width:"1183",height:"788"})),(0,i.kt)("p",null,"Make sure to put breakpoints at the points of interest before you start the app."),(0,i.kt)("p",null,"After the app is launched, go back to the Terminal where Detox is running and press any key.\nAs a result, you are expected to see a confirmation from Detox, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Found the app (com.wix.detox-example) with process ID = 16854. Proceeding...\n")),(0,i.kt)("p",null,"Now the entire test will run as usual until it sends an action to the app, which gets trapped\nin your breakpoint."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Breakpoint is active",src:n(22046).Z,width:"530",height:"249"})),(0,i.kt)("p",null,"Happy debugging!"))}C.isMDXComponent=!0;const I={toc:[]},S="wrapper";function Z(e){let{components:t,...n}=e;return(0,i.kt)(S,(0,a.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here are some known issues you can solve on your own:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DetoxWSClient: Retrying... At connectToServer")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"I/DetoxWSClient: At connectToServer\nD/DetoxWSClient: Retrying...\n")),(0,i.kt)("p",{parentName:"li"},"If you see the repeatedly printed messages like above in Android application logs, it's likely\nthat your port is not reversed. Assuming you're following the tutorial and ",(0,i.kt)("inlineCode",{parentName:"p"},"detoxServer")," address\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"ws://localhost:8099")," (if not \u2013 check what Detox prints you), reverse the port on your device\nusing ADB:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adb reverse tcp:8099 tcp:8099\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Waited for the new RN-context for too long!")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Waited for the new RN-context for too long! (60 seconds)\nIf you think that\u2019s not long enough, consider applying a custom Detox runtime-config in DetoxTest.runTests().\n")),(0,i.kt)("p",{parentName:"li"},"If you see an error like above, you can patch Detox code to disable the timeout here:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="detox/android/detox/src/main/java/com/wix/detox/config/DetoxConfig.kt"',title:'"detox/android/detox/src/main/java/com/wix/detox/config/DetoxConfig.kt"'}," package com.wix.detox.config\n\n class DetoxConfig {\n     @JvmField var idlePolicyConfig: DetoxIdlePolicyConfig = DetoxIdlePolicyConfig()\n-    @JvmField var rnContextLoadTimeoutSec = 60\n+    @JvmField var rnContextLoadTimeoutSec = Int.MAX_VALUE\n\n     fun apply() {\n         idlePolicyConfig.apply()\n")))))}Z.isMDXComponent=!0;const A={},j="How to Debug",E={unversionedId:"introduction/debugging",id:"version-20.x/introduction/debugging",title:"How to Debug",description:"Detox Tests",source:"@site/versioned_docs/version-20.x/introduction/debugging.mdx",sourceDirName:"introduction",slug:"/introduction/debugging",permalink:"/Detox/docs/introduction/debugging",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/introduction/debugging.mdx",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Your First Test",permalink:"/Detox/docs/introduction/your-first-test"},next:{title:"Preparing for CI",permalink:"/Detox/docs/introduction/preparing-for-ci"}},O={},X=[{value:"Detox Tests",id:"detox-tests",level:2},{value:"JavaScript application code",id:"javascript-application-code",level:2},{value:"Native application code",id:"native-application-code",level:2},{value:"Setting Detox up as a compiling dependency",id:"setting-detox-up-as-a-compiling-dependency",level:3},{value:"Add a &quot;manual&quot; configuration to your Detox config",id:"add-a-manual-configuration-to-your-detox-config",level:3},{value:"Run a specific test",id:"run-a-specific-test",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],M={toc:X},V="wrapper";function P(e){let{components:t,...p}=e;return(0,i.kt)(V,(0,a.Z)({},M,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-debug"},"How to Debug"),(0,i.kt)("h2",{id:"detox-tests"},"Detox Tests"),(0,i.kt)("p",null,"If you need to walk through your Detox tests step by step, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"debugger")," statement\ninside your test to mark a starting point, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="e2e/starter.test.js"',title:'"e2e/starter.test.js"'}," describe('Example', () => {\n   beforeAll(async () => {\n     await device.launchApp();\n+    debugger;\n   });\n")),(0,i.kt)("p",null,"Now run Detox with that specific test and ",(0,i.kt)("inlineCode",{parentName:"p"},"--inspect-brk")," flag, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --inspect-brk -c android.emu.debug e2e/starter.test.js\n")),(0,i.kt)("p",null,"Assuming you're using Jest, you'll see something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},'DETOX_CONFIGURATION="android.emu.debug" node --inspect-brk ./node_modules/.bin/jest --config e2e/jest.config.js --runInBand e2e/starter.test.js\nDebugger listening on ws://127.0.0.1:9229/3dedd03b-8896-4ab8-a0a8-1b647abb9c98\nFor help, see: https://nodejs.org/en/docs/inspector\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn more about debugging with ",(0,i.kt)("inlineCode",{parentName:"p"},"--inspect-brk"),", refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/"},"Debugging \u2014 Getting Started"),"\non the official Node.js website. This tutorial suggests using Google Chrome for debugging,\nbut you can also use an IDE to connect to the debugger.")),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"Google Chrome")," and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome://inspect")," tab, where you'll see ",(0,i.kt)("inlineCode",{parentName:"p"},"./node_modules/.bin/jest")," as a remote\ntarget waiting until you click ",(0,i.kt)("inlineCode",{parentName:"p"},"inspect")," to attach to it."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(63296).Z,width:"835",height:"388"})),(0,i.kt)("p",null,"Happy debugging!"),(0,i.kt)("h2",{id:"javascript-application-code"},"JavaScript application code"),(0,i.kt)("p",null,"Use debug configurations of your app that rely on React Native Packager running on port 8081 (or another):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ios.sim.debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"android.emu.debug"))),(0,i.kt)("p",null,"For the rest of details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/debugging"},"React Native \u2013 Debugging"),"."),(0,i.kt)("h2",{id:"native-application-code"},"Native application code"),(0,i.kt)("h3",{id:"setting-detox-up-as-a-compiling-dependency"},"Setting Detox up as a compiling dependency"),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This step is optional. It is intended for investigating weird crashes or when contributing to Detox itself.")),(0,i.kt)(s.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"iOS",label:"iOS",default:!0,mdxType:"TabItem"},(0,i.kt)(u,{mdxType:"CompilingIOS"})),(0,i.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,i.kt)(g,{mdxType:"CompilingAndroid"}))),(0,i.kt)("h3",{id:"add-a-manual-configuration-to-your-detox-config"},'Add a "manual" configuration to your Detox config'),(0,i.kt)(s.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"iOS",label:"iOS",default:!0,mdxType:"TabItem"},(0,i.kt)(b,{mdxType:"ConfigIOS"})),(0,i.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,i.kt)(x,{mdxType:"ConfigAndroid"}))),(0,i.kt)("p",null,"While the ",(0,i.kt)("inlineCode",{parentName:"p"},"behavior")," section is a ",(0,i.kt)("strong",{parentName:"p"},"mandatory")," thing to include, there are a few more optional\nparameters to disable various side effects and make life easier when debugging:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},' {\n   \u2026\n   "configurations": {\n     "<your configuration>": {\n       \u2026\n       "behavior": {\n         "launchApp": "manual"\n       },\n+      "session": {\n+        "autoStart": true,\n+        "debugSynchronization": 0,\n+        "server": "ws://localhost:8099",\n+        "sessionId": "test"\n+      },\n+      "testRunner": {\n+        "args": {\n+          "testTimeout": 999999\n+        }\n+      }\n+      "artifacts": false\n     },\n   }\n }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using a preconfigured ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," with an autostarting server removes the legwork of copying and\npasting values to the instrumentation runner launch arguments dialog every time before any launch\nfrom the IDE. Otherwise, by default when the ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," object omitted, ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionId"),"\nare randomly generated for every new test session.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"debugSynchronization: 0")," override matters only if you have a global ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," config\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"debugSynchronization")," set to a positive integer value. Otherwise, it is not needed. The point\nis to disable regular app polling requests during debugging, since that only can hinder the debugging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are using Jest as a test runner, you might want to prolong the test timeout via forwarding\n",(0,i.kt)("inlineCode",{parentName:"p"},"--testTimeout 999999")," to it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts: false")," override also matters only if you have a global ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts")," config.\nThe motivation is to disable irrelevant taxing activities on the device such as capturing logs\nscreenshots, videos and so on. If your investigation addresses a specific artifact plugin glitch\non the native side, then just disable all the non-relevant plugins. See\n",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/config/artifacts"},"Configuration > Artifacts")," document for the reference."))),(0,i.kt)("h3",{id:"run-a-specific-test"},"Run a specific test"),(0,i.kt)("p",null,"Usually, you would want to focus on a specific test suite to save time, e.g.:"),(0,i.kt)(s.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,i.kt)(r.Z,{language:"sh",mdxType:"CodeBlock"},"detox test -c ios.manual e2e/someSuite.test.js")),(0,i.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,i.kt)(r.Z,{language:"sh",mdxType:"CodeBlock"},"detox test -c android.manual e2e/someSuite.test.js"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Don't use multiple workers, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"-w, --maxWorkers")," for Jest, if you set ",(0,i.kt)("inlineCode",{parentName:"p"},"session.sessionId")," to a constant value.")),(0,i.kt)("p",null,"Afterwards, you should see your test suite starting as usual until it reaches the app launch, where\nDetox stops instead and prompts you to launch the app from the IDE:"),(0,i.kt)(s.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,i.kt)(w,{mdxType:"RunIos"})),(0,i.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,i.kt)(C,{mdxType:"RunAndroid"}))),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)(s.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,i.kt)(o.Fragment,null,"There are no known issues at the moment. Check out ",(0,i.kt)("b",null,"Android")," tab if you need some.")),(0,i.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,i.kt)(Z,{mdxType:"TroubleshootingAndroid"}))))}P.isMDXComponent=!0},22046:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android-happy-debugging-6d0b46e69ac6e09e311d0b6fb051f26a.png"},70310:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android-studio-debug-configuration-1ed2ae95a29d7c1632b0ef0df8d5f13c.png"},63296:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inspect-brk-1f9ff60afe8fa89209a9c8fa27ea7299.png"},89584:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/drag-src-to-project-31530917b943a4034be35eaa96cf2379.png"},47470:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-schema-arguments-046e78ab9badb56d7e860e6412d47ec1.png"},18739:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/embed-detox-project-13a3184c5b6f136a0537b8c2fc57347b.png"},63981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extracted-ios-src-ae12bd6e062f06e7e7e1f41e3746edd9.png"},50328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/launch-app-with-debugger-b16ad3d8e537e0bfe0b5e007489db914.png"},32516:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/putting-a-breakpoint-d12086f5097b61ba8c10fb8caab3f574.png"}}]);