import { Given, Then, When } from "cucumber";
import homePage from '../pages/homePage.page';
import advancedSearch from '../pages/advancedSearch.page';

Given(/^I go to advanced search page "(.+)"$/, (url) => {
    advancedSearch.goToAdvancedSearch(url);
})

Given(/^I give title of the resource as "(.+)" and author name as "(.+)"$/, (title, author) => {
    advancedSearch.setTitleStr(title);
    advancedSearch.setAuthorStr(author);
})

Given(/^I set year of publishing as (in|between) "(.+)"( and "(.+)")?$/, (type, startYear, endYear) => {
    if (type === "between" && endYear) {
        advancedSearch.setDateRange("between", startYear, endYear);
    } else {
        advancedSearch.setPublishedYear("in", startYear);
    }
})

When(/^I click search button for advanced search$/, () => {
    advancedSearch.search();
})

Then(/^URL should be "(.+)"$/ , (url)=> {
    homePage.validateUrl(url);
})

Then(/^This item is published in "(.+)"$/, (year) => {
    advancedSearch.matchPublishedYear();
})

Then(/^This item is authored by "(.+)"$/, (year) => {
    advancedSearch.matchAuthor();
})
