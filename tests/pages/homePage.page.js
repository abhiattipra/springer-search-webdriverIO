import Page from './page';

class HomePage extends Page {
    /**
     * Define elements
     */
    get searchFieldMain() {
        return browser.element('//*[@id="query"]');
    }


    get searchIcon() {
      return browser.element('//*[@id="search"]');
    }

    get resultListContainer() {
        return browser.element('//*[@id="results-list"]')
    }

    get firstResultTitleElm() {
        return browser.element('//*[@id="results-list"]/li[1]//h2/a[contains(@class, "title")]')
    }

    loadHomePage() {
        super.open('/');
    }

    setSearchString(str) {
        this.searchFieldMain.setValue(str);
    }

    search() {
        this.searchIcon.click();
    }

    matchTitle(str) {
        browser.waitUntil(() => this.resultListContainer.isVisible(), 5000, () => {
            return this.firstResultTitleElm.getText().to.equal(str);
        });
    }

    // common methods across features
    validateUrl(expectedUrl) {        
        return expect(browser.getUrl()).to.contain(expectedUrl);
    }

    inputElmByName(inputName) {
        return browser.element('//input[@name="' + inputName + '"]');
    }
}
export default new HomePage();