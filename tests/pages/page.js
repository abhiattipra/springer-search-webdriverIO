//  * Abstract Page class instance to be inherited by all Application pages
//  * @type {Page}



export default class Page {
  //  * Prototype function to navigate to a page
  open(path) {
    browser.url(path);
  }
}
