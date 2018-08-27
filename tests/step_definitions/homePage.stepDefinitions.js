import { Given, Then, When } from "cucumber";
import homePage from '../pages/homePage.page';

Given(/^I go to the SpringerLink home page$/, () => {
  homePage.loadHomePage();
})

Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
  expect(browser.getTitle()).to.be.eql(title);
})

Given(/^I type a search string "([^"]*)" in the search box$/, (str) => {
  homePage.setSearchString(str);
})

When(/^I click search icon$/, () => {
  homePage.search();
})

Then(/^I expect the top most search result item has title "([^"]*)"$/, (str) => {
  expect(homePage.matchTitle(str))
})