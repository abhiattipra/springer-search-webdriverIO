import Page from './page';
import homePage from './homePage.page';

class AdvancedSearch extends Page {

    get searchGear() {
        return browser.element('//*[@id="search-options"]//button');
    }

    get advSearchOption() {
        return browser.element('//*[@id="search-options"]//a[@id="advanced-search-link"]')
    }

    get dateFilterDropdown() {
        return browser.element('//*[@id="date-facet-mode"]');
    }

    get submitBtn() {
        return browser.element('//*[@id="submit-advanced-search"]')
    }

    get startYearInput() {
        return browser.element('//*[@id="facet-start-year"]')
    }

    get endYearInput() {
        return browser.element('//*[@id="facet-end-year"]')
    }
    
    get resultListContainer() {
        return browser.element('//*[@id="results-list"]')
    }

    get firstResultYearElm() {
        return browser.element('//*[@id="results-list"]/li[1]//p[contains(@class, "meta")]//*[contains(@class, "year")]')
    }

    get firstResultAuthorElm() {
        return browser.element('//*[@id="results-list"]/li[1]//p[contains(@class, "meta")]//*[contains(@class, "authors")]/a')
    }

    goToAdvancedSearch(expectedUrl) {
        this.searchGear.click();
        this.advSearchOption.click();
        return homePage.validateUrl(expectedUrl);
    }

    setTitleStr(title) {
        homePage.inputElmByName('title-is').setValue(title);  
    }

    setAuthorStr(author) {
        homePage.inputElmByName('author-is').setValue(author);
    }

    setPublishedYear(type, startYear) {
        this.dateFilterDropdown.selectByValue(type);
        this.startYearInput.setValue(startYear);
    }

    setDateRange(type, startYear, endYear) {
        this.dateFilterDropdown.selectByValue(type);
        this.startYearInput.setValue(startYear);
        this.endYearInput.setValue(startYear);
    }

    search() {
        this.submitBtn.scroll();
        this.submitBtn.click();
    }

    matchPublishedYear() {
        browser.waitUntil(() => this.resultListContainer.isVisible(), 5000, () => {
            return this.firstResultYearElm.getText().contains(str);
        });
    }

    matchAuthor() {
        browser.waitUntil(() => this.resultListContainer.isVisible(), 5000, () => {
            return this.firstResultAuthorElm.getText().contains(str);
        });
    }
}
export default new AdvancedSearch()
