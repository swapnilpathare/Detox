const {expectElementSnapshotToMatch} = require("./utils/snapshot");
const {waitForCondition} = require("./utils/waitForCondition");
const jestExpect = require('expect').default;

const MockServer = require('../mock-server/mock-server');

describe('Web View', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('WebView')).tap();
  });

  describe('single web-view scenario', () => {
    const expectWebViewToMatchSnapshot = async (snapshotName) => {
      const webViewElement = element(by.id('webViewFormWithScrolling'));
      await expectElementSnapshotToMatch(webViewElement, snapshotName);
    };

    describe('matchers', () => {
      describe(':ios:', () => {
        it('should not find element by invalid index', async () => {
          await expect(web.element(by.web.tag('p')).atIndex(100)).not.toExist();
        });

        it('should find element by hrefContains', async () => {
          await expect(web.element(by.web.hrefContains('w3schools'))).toExist();
        });

        it('should find element by href', async () => {
          await expect(web.element(by.web.href('https://www.w3schools.com'))).toExist();
        });

        it('should raise an error when element does not exists but expect to exist', async () => {
          await jestExpect(async () => {
            await expect(web.element(by.web.id('nonExistentElement'))).toExist();
          }).rejects.toThrowError();
        });

        it('should raise an error when does element not exists at index', async () => {
          await jestExpect(async () => {
            await expect(web.element(by.web.tag('p')).atIndex(100)).toExist();
          }).rejects.toThrowError();
        });
      });

      it('should find element by id', async () => {
        await expect(web.element(by.web.id('pageHeadline'))).toExist();
      });

      it('should find element by tag', async () => {
        await expect(web.element(by.web.tag('body'))).toExist();
      });

      it('should find element by index', async () => {
        await expect(web.element(by.web.tag('p')).atIndex(0)).toExist();
      });

      it('should find element by class name', async () => {
        await expect(web.element(by.web.className('specialParagraph'))).toExist();
      });

      it('should find element by css selector', async () => {
        await expect(web.element(by.web.cssSelector('.specialParagraph'))).toExist();
      });

      it('should find element by xpath', async () => {
        await expect(web.element(by.web.xpath('//p[@class="specialParagraph"]'))).toExist();
      });

      it('should find element by name', async () => {
        await expect(web.element(by.web.name('fname'))).toExist();
      });

      it('should assert that an element is not visible', async () => {
        await expect(web.element(by.web.id('nonExistentElement'))).not.toExist();
      });
    });

    describe('actions', () => {
      describe('input', () => {
        const inputElement = web.element(by.web.id('fname'));

        describe(':ios:', () => {
          it('should type text in input regardless of content-editable parameter on ios', async () => {
            await inputElement.typeText('Test', false);
            await inputElement.typeText('er', true);

            await expect(inputElement).toHaveText('Tester');
          });

          it('should type text in input', async () => {
            await inputElement.typeText('Test');
            await inputElement.typeText('er');

            await expect(inputElement).toHaveText('Tester');
          });

          it('should keep cursor position on end while typing', async () => {
            await inputElement.typeText('Test');
            await expectWebViewToMatchSnapshot('typing-keep-cursor-position-webview-input-1');

            await inputElement.typeText('er');
            await expectWebViewToMatchSnapshot('typing-keep-cursor-position-webview-input-2');
          });

          it('should not type more text than `maxlength` limit', async () => {
            const text = '0123456789 ABCDEF';
            await inputElement.typeText(text);

            const maxlength = 10;
            const expectedText = text.substring(0, maxlength);
            await expect(inputElement).toHaveText(expectedText);
          });

          it('should clear text in input', async () => {
            await inputElement.typeText('Test');
            await inputElement.clearText();

            await expect(inputElement).toHaveText('');
          });

          it('should replace text in input', async () => {
            await inputElement.typeText('Temp');
            await inputElement.replaceText('Tester');

            await expect(inputElement).toHaveText('Tester');
          });

          it('should tap on submit button and update result', async () => {
            await inputElement.typeText('Tester');
            await web.element(by.web.id('submit')).tap();

            await expect(inputElement).toHaveText('Tester');
          });
        });

        it('should select all text in input', async () => {
          await inputElement.typeText('Tester');
          await inputElement.selectAllText();

          await expectWebViewToMatchSnapshot('select-all-text-in-webview');
        });

        it('should focus on input', async () => {
          await inputElement.focus();

          await expectWebViewToMatchSnapshot('focus-on-input-webview');
        });

        it('should move cursor to end', async () => {
          await inputElement.typeText('Tester');
          await inputElement.moveCursorToEnd();

          await expectWebViewToMatchSnapshot('move-cursor-to-end-webview');
        });
      });

      describe('content-editable', () => {
        const contentEditableElement = web.element(by.web.id('contentEditable'));

        describe(':ios:', () => {
          it('should type text in content-editable regardless of content-editable parameter on ios', async () => {
            await contentEditableElement.typeText('Tes', false);
            await contentEditableElement.typeText('te', true);
            await contentEditableElement.typeText('r');

            await expect(contentEditableElement).toHaveText('Name: Tester');
          });

          it('should clear text in content-editable', async () => {
            await contentEditableElement.clearText();

            await expect(contentEditableElement).toHaveText('');
          });

          it('should replace text in content-editable', async () => {
            await contentEditableElement.replaceText('Tester');

            await expect(contentEditableElement).toHaveText('Tester');
          });

          it('should type text in content-editable', async () => {
            await contentEditableElement.typeText('Test', true);
            await contentEditableElement.typeText('er', true);

            await expect(contentEditableElement).toHaveText('Name: Tester');
          });

          it('should keep cursor position on end while typing', async () => {
            await contentEditableElement.typeText('Test', true);
            await expectWebViewToMatchSnapshot('typing-keep-cursor-position-webview-content-editable-1');

            await contentEditableElement.typeText('er', true);
            await expectWebViewToMatchSnapshot('typing-keep-cursor-position-webview-content-editable-2');
          });
        });

        it('should select all text in content-editable', async () => {
          await contentEditableElement.selectAllText();

          await expectWebViewToMatchSnapshot('select-all-text-in-content-editable-webview');
        });

        it('should focus on content-editable', async () => {
          await contentEditableElement.focus();

          await expectWebViewToMatchSnapshot('focus-on-content-editable-webview');
        });

        it('should move cursor to end', async () => {
          await contentEditableElement.moveCursorToEnd();

          await expectWebViewToMatchSnapshot('move-cursor-to-end-content-editable-webview');
        });
      });

      it('should scroll to view', async () => {
        await web.element(by.web.id('bottomParagraph')).scrollToView();

        await expectWebViewToMatchSnapshot('scroll-to-view-webview');
      });

      it('should run script', async () => {
        const headline = web.element(by.web.id('pageHeadline'));
        await headline.runScript('(el) => { el.textContent = "Changed"; }');

        await expect(headline).toHaveText('Changed');
      });

      it('should run script with non-string function as parameter', async () => {
        const headline = web.element(by.web.id('pageHeadline'));
        await headline.runScript((el) => { el.textContent = "Changed"; });

        await expect(headline).toHaveText('Changed');
      });

      it('should run script with arguments', async () => {
        const headline = web.element(by.web.id('pageHeadline'));
        await headline.runScript('(el, text) => { el.textContent = text; }', ['Changed']);

        await expect(headline).toHaveText('Changed');
      });

      it('should run script with arguments with non-string function as parameter', async () => {
        const headline = web.element(by.web.id('pageHeadline'));
        await headline.runScript((el, text) => { el.textContent = text; }, ['Changed']);

        await expect(headline).toHaveText('Changed');
      });

      it('should return value from run script', async () => {
        const headline = web.element(by.web.id('pageHeadline'));
        const textContent = await headline.runScript('(el) => { return el.textContent; }');

        await jestExpect(textContent).toBe('First Webview');
      });

      it('should raise error when script fails', async () => {
        const headline = web.element(by.web.id('pageHeadline'));

        await jestExpect(async () => {
          await headline.runScript('(el) => { el.textContent = "Changed"; throw new Error("Error"); }');
        }).rejects.toThrowError();
      });
    });

    describe('getters', () => {
      it(':ios: should get the web page url', async () => {
        await web.element(by.web.id('w3link')).tap();

        await waitForCondition(
          () => web.element(by.web.tag('body')).getCurrentUrl(),
          (result) => result === 'https://www.w3schools.com/',
          5000
        );
      });

      it('should get the web page title', async () => {
        const title = await web.element(by.web.tag('body')).getTitle();
        await jestExpect(title).toBe('First Webview');
      });

      it('should get text from element', async () => {
        const source = await web.element(by.web.id('pageHeadline')).getText();
        await jestExpect(source).toBe('First Webview');
      });
    });
  });

  describe(':ios: inner frame', () => {
    /** @type {Detox.WebViewElement} */
    let webview;
    const mockServer = new MockServer();

    beforeAll(async () => {
      mockServer.init();

      if (device.getPlatform() === 'android') {
        // Android needs to reverse the port in order to access the mock server
        await device.reverseTcpPort(mockServer.port);
      }
    });

    afterAll(async () => {
      await mockServer.close();
    });

    beforeEach(async () => {
      await element(by.id('toggle3rdWebviewButton')).tap();
      webview = web(by.id('webView'));
    });

    it('should find element in inner frame', async () => {
      await expect(webview.element(by.web.tag('h1'))).toExist();
      await expect(webview.element(by.web.tag('h1'))).toHaveText('Hello World!');
    });
  });

  describe('multiple web-views scenario',() => {
    /** @type {Detox.WebViewElement} */
    let webview;

    beforeEach(async () => {
      await element(by.id('toggle2ndWebviewButton')).tap();

      webview = web(by.id('webView'));
    });

    it('should have a title', async () => {
      const title = await webview.element(by.web.tag('body')).getTitle();
      await jestExpect(title).toBe('Dummy Webview');
    });

    it('should have a paragraph', async () => {
      await expect(webview.element(by.web.id('message'))).toExist();
      await expect(webview.element(by.web.id('message'))).toHaveText('This is a dummy webview.');
    });

    it('should throw on multiple matches', async () => {
      await element(by.id('toggle3rdWebviewButton')).tap();

      await jestExpect(async () => {
        await expect(web(by.id('webView')).element(by.web.id('message'))).toExist();
      }).rejects.toThrowError();

      await device.launchApp();
    });

    describe('at-index support', () => {
      beforeEach(async () => {
        await element(by.id('toggle3rdWebviewButton')).tap();
      });

      describe(':ios:', () => {
        it('should find web-view by index', async () => {
          await expect(web(by.id('webView')).atIndex(0).element(by.web.id('message'))).toExist();
          await expect(web(by.id('webView')).atIndex(1).element(by.web.id('message'))).toExist();
        });

        it('should throw on index out of bounds', async () => {
          await jestExpect(async () => {
            await expect(web(by.id('webView')).atIndex(2).element(by.web.id('message'))).toExist();
          }).rejects.toThrowError();
        });
      });

      // Not implemented yet
      it(':android: should throw on usage of atIndex', async () => {
        await jestExpect(async () => {
          await expect(web(by.id('webView')).atIndex(0).element(by.web.id('message'))).toExist();
        }).rejects.toThrowError();
      });
    });
  });
});
