//
//  ActionDelegate+Error.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2023.
//

import Foundation

extension ActionDelegate {
  /// Represents an error caused by `ActionDelegate`.
  public enum Error: Swift.Error {
    /// No matching elements.
    case noMatchingElement

    /// Element does not conform to protocol `XCUIScreenshotProviding`.
    case elementIsNotScreenshotProviding

    /// Error (`underlyingError`) with debug artifacts.
    case errorWithDebugArtifacts(
      underlyingError: CustomStringConvertible,
      _ artifactsPaths: [String: String]
    )
  }
}


extension ActionDelegate.Error: CustomStringConvertible {
  public var description: String {
    switch self {
      case .noMatchingElement:
        return "No matching element was found"

      case .elementIsNotScreenshotProviding:
        return "Element does not conform to protocol `XCUIScreenshotProviding`"

      case .errorWithDebugArtifacts(let underlyingError, _):
        return underlyingError.description
    }
  }
}