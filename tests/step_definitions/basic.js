import { Given, Then, When } from "cucumber";
import Page from '../pages/page';

const pages = new Page();
  Given(/^I go to the Springer search page$/, () => {
    pages.open('/');
  });


  Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
    console.log(browser.cookie());
  });
