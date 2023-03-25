

import Page from '../pageobjects/page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

        /**
     * overwrite specific options to adapt it to page object
     */
        open () {
            return super.open('login');
        }

    /**
     * define selectors using getter methods
     */
    get searchBar () {
        return $("#entry_217820 [type='text']")
    }

    get btnSubmit () {
        return $("div#search  .type-text");
    }

    get myAccountButton() {
        return $("div#widget-navbar-217834 > ul > li:nth-of-type(6) > a[role='button']  .title")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async searchingForDesiredProduct (searchText) {
        await this.searchBar.setValue(searchText);
        await this.btnSubmit.click();
    }




}

export default new LoginPage();
