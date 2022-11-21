//
//  XCUIApplication+settingsApp.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation

extension XCUIApplication {
  /// Returns the settings app.
  static var settingsApp: XCUIApplication {
    return XCUIApplication(bundleIdentifier: "com.apple.Preferences")
  }
}