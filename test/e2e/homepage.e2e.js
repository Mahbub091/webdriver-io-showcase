import LoginPage from  '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';


describe('Validating HomePage', () => {
    it('Navigating to the URL', async () => {
        await LoginPage.open()
    });
});