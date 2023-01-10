//
//  ExpectationDelegate.swift (DetoxTester)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import DetoxInvokeHandler
import Foundation
import XCTest

/// A delegate for expectations that can be performed on an element.
class ExpectationDelegate: ExpectationDelegateProtocol {
  let app: XCUIApplication

  let whiteBoxMessageHandler: WhiteBoxMessageHandler

  init(_ app: XCUIApplication, whiteBoxMessageHandler: @escaping WhiteBoxMessageHandler) {
    self.app = app
    self.whiteBoxMessageHandler = whiteBoxMessageHandler
  }

  // TODO: extract to methods.
  func expect(
    _ expectation: Expectation, isTruthy: Bool, on element: AnyHashable, timeout: Double?
  ) throws {
    guard let element = element as? XCUIElement else {
      throw Error.notXCUIElement
    }

    expectLog("expect \(element) \(isTruthy ? "" : "not ")\(expectation), " +
              "with timeout: \(String(describing: timeout))")

    switch expectation {
      case .toBeFocused:
        element.assertIsFocused(isTruthy: isTruthy)

      case .toHaveId(let id):
        element.assertIdentifier(equals: id, isTruthy: isTruthy)

      case .toHaveSliderInPosition(let normalizedPosition, let tolerance):
        element.assertSlider(
          inNormalizedPosition: normalizedPosition,
          withTolerance: tolerance ?? 0,
          isTruthy: isTruthy
        )

      case .toExist:
        element.assertExists(isTruthy: isTruthy)

      case .toBeVisible(let threshold):
        guard let response = whiteBoxMessageHandler(
          .verifyVisibility(ofElement: element, withThreshold: threshold)
        ) else {
          fatalError("Visibility expectation is not supported by the XCUITest target")
        }

        response.assertResponse(equalsTo: .boolean(isTruthy))

      case .toHaveText(let text):
        guard let response = whiteBoxMessageHandler(
          .verifyText(ofElement: element, equals: text)
        ) else {
          fatalError("Text expectation is not supported by the XCUITest target")
        }

        response.assertResponse(equalsTo: .boolean(isTruthy))
    }
  }
}

extension ExpectationDelegate {
  enum Error: Swift.Error {
    case notXCUIElement
  }
}

private extension XCUIElement {
  func assertExists(isTruthy: Bool) {
    if exists == isTruthy {
      execLog(
        "element \(exists ? "is exist" : "is not exist"), expected: \(isTruthy.description)",
        type: .error
      )

      fatalError(
        "Element \(exists ? "is exist" : "is not exist"), expected: \(isTruthy.description)"
      )
    }

    expectLog(
      "element \(exists ? "is exist" : "is not exist")"
    )
  }

  func assertIsFocused(isTruthy: Bool) {
    if hasFocus == isTruthy {
      execLog(
        "element \(hasFocus ? "is focused" : "is not focused"), expected: \(isTruthy.description)",
        type: .error
      )

      fatalError(
        "Element \(hasFocus ? "is focused" : "is not focused"), expected: \(isTruthy.description)"
      )
    }

    expectLog(
      "element \(hasFocus ? "is focused" : "is not focused")"
    )
  }

  func assertIdentifier(equals value: String, isTruthy: Bool) {
    let equalsId = identifier == value
    if equalsId != isTruthy {
      execLog(
        "element identifier \(equalsId ? "equals" : "does not equals") the expected identifier, " +
        "expected: \(isTruthy.description)",
        type: .error
      )
      fatalError("Element identifier \(equalsId ? "equals" : "does not equals") the expected " +
                 "identifier, expected: \(isTruthy.description)")
    }

    expectLog(
      "element identifier \(equalsId ? "equals" : "does not equals") the expected identifier"
    )
  }

  func assertSlider(
    inNormalizedPosition position: Double,
    withTolerance tolerance: Double,
    isTruthy: Bool
  ) {
    let deviation = abs(normalizedSliderPosition - position)
    let isInRange = deviation <= tolerance

    if isInRange != isTruthy {
      expectLog(
        "slider position is \(isInRange ? "in" : "not in") accepted range, expected: " +
        "\(isTruthy.description)",
        type: .error
      )

      fatalError(
        "Slider position is \(isInRange ? "in" : "not in") accepted range, expected: " +
        "\(isTruthy.description)"
      )
    }

    expectLog("slider position deviation (\(deviation)) <= tolerance (\(tolerance))")
  }
}