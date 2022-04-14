//
//  WebSocketSendActionType.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation

/// Type of a web-socket action to be sent from Detox Tester to Detox Server.
public enum WebSocketSendActionType: String {
  case reportReady = "ready"
  case reportWebSocketDidOpen = "login"
  case reportStatus = "currentStatusResult"
  case reportCleanupDone = "cleanupDone"
  case reportWaitForActiveDone = "waitForActiveDone"
  case reportInvokeResult = "invokeResult"
}