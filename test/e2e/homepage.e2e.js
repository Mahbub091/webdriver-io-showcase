import LoginPage from  '../pageobjects/login.page.js';

describe('Validating HomePage', () => {
    it('Navigating to the URL', async () => {
        await LoginPage.open()
        await expect(browser).toHaveUrl("https://ecommerce-playground.lambdatest.io/login")
        await expect(browser).toHaveTitle("Your Store")
        await expect(LoginPage.searchBar).toBeDisplayed()
    });

    it('Validating & Using Search Box',async () => {
        await expect(LoginPage.searchBar).toBeDisplayed()
        await LoginPage.searchingForDesiredProduct("Apple")
    });

    it('My Account Button',async () => {
        await expect(LoginPage.myAccountButton).toBeDisplayed()
        await (await LoginPage.myAccountButton).click()
        expect (browser).toHaveUrl("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    });
});