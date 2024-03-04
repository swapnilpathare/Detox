//
//  WebJSCodeBuilder.swift (Detox)
//  Created by Asaf Korem (Wix.com) on 2024.
//

import Foundation

class WebJSCodeBuilder {
	private var predicate: WebPredicate?
	private var expectation: WebExpectationType?
	private var expectationParams: [String]?
	private var expectationModifiers: [WebModifier]?
	private var action: WebActionType?
	private var actionParams: [String]?

	func with(predicate: WebPredicate) -> WebJSCodeBuilder {
		self.predicate = predicate

		return self
	}

	func with(
		expectation: WebExpectationType,
		params: [String]?,
		modifiers: [WebModifier]?
	) -> WebJSCodeBuilder {
		self.expectation = expectation
		self.expectationParams = params
		self.expectationModifiers = modifiers

		return self
	}

	func with(action: WebActionType, params: [String]?) -> WebJSCodeBuilder {
		self.action = action
		self.actionParams = params

		return self
	}

	func build() -> String {
		guard let predicate = predicate else {
			return "return false;"
		}

		let elementScript = createJSSelector(forType: predicate.type, value: predicate.value)

		if let expectation = expectation {
			let expectationScript: String
			switch expectation {
				case .toExist:
					expectationScript = "element !== null"
				case .toHaveText:
					let expectedText = expectationParams?.first ?? ""
					expectationScript = "element.textContent === '\(expectedText)'"
			}

			return """
		(() => {
		let element = \(elementScript);
		return \(modifyJSExpectation(expectation: expectationScript, withModifiers: expectationModifiers));
		})();
		"""
		} else if let action = action {
			let actionScript = createActionScript(
				forAction: action, params: actionParams, onElementWithScript: elementScript)
			return """
		(() => {
		\(actionScript)
		})();
		"""
		} else {
			dtx_fatalError("No expectation or action was set")
		}
	}

	private func modifyJSExpectation(
		expectation: String, withModifiers modifiers: [WebModifier]?
	) -> String {
		guard let modifiers = modifiers else {
			return expectation
		}

		var modifiedExpectation = expectation

		for modifier in modifiers {
			switch modifier {
				case .not:
					modifiedExpectation = "!(\(modifiedExpectation))"
			}
		}

		return modifiedExpectation
	}

	private func createActionScript(
		forAction action: WebActionType,
		params: [String]?,
		onElementWithScript elementScript: String
	) -> String {
		switch action {
			case .tap:
				return "\(elementScript).click();"
			case .clearText:
				return "\(elementScript).value = '';"
			case .typeText:
				guard let text = params?.first else {
					dtx_fatalError("Missing text parameter for typeText action")
				}

				return "\(elementScript).value = '\(text)';"
			case .focus:
				return "\(elementScript).focus();"
			case .getCurrentUrl:
				return "return window.location.href;"
			case .getText:
				return "return \(elementScript).textContent;"
			case .getTitle:
				return "return document.title;"
			case .moveCursorToEnd:
				return """
					let element = \(elementScript);
					let length = element.value.length;
					element.setSelectionRange(length, length);
					"""
			case .replaceText:
				guard let text = params?.first else {
					dtx_fatalError("Missing text parameter for replaceText action")
				}

				return "\(elementScript).value = '\(text)';"
			case .runScript:
				guard let script = params?.first else {
					dtx_fatalError("Missing script parameter for runScript action")
				}

				return "return (\(script))(\(elementScript));"

			case .runScriptWithArgs:
				guard let script = params?.first else {
					dtx_fatalError("Missing script parameter for runScript action")
				}

				let paramsOrNil = params?.dropFirst().joined(separator: ", ")
				let params = paramsOrNil != nil ? paramsOrNil! + ", " : ""

				return "return (\(script))(\(elementScript)\(params));"
			case .selectAllText:
				return """
					let element = \(elementScript);
					let length = element.value.length;
					element.setSelectionRange(0, length);
					"""
			case .scrollToView:
				return """
					let element = \(elementScript);
					element.scrollIntoView({ behavior: 'auto' });
					"""
		}
	}

	private func createJSSelector(forType type: WebPredicateType, value: String) -> String {
		let value = value.replacingOccurrences(of: "'", with: "/'")

		switch type {
			case .id:
				return "document.querySelector('#\(value)')"
			case .className:
				return "document.querySelector('.\(value)')"
			case .cssSelector:
				return "document.querySelector('\(value)')"
			case .name:
				return "document.querySelector('[name=\"\(value)\"]')"
			case .xpath:
				return "document.evaluate('\(value)', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue"
			case .href:
				return "document.querySelector('a[href=\"\(value)\"]')"
			case .hrefContains:
				return "document.querySelector('a[href*=\"\(value)\"]').href"
			case .tag:
				return "document.querySelector('\(value)')"
			case .label:
				return "document.querySelector('[aria-label=\"\(value)\"]')"
			case .value:
				return "document.querySelector('[value=\"\(value)\"]')"
			case .accessibilityType:
				return "document.querySelector('[role=\"\(value)\"]')"
		}
	}
}
