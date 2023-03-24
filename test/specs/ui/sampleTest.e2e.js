describe('Automation Exercise Automation', () => {
    it('Navigating to HomePage', async() => {
        await browser.url('https://automationexercise.com/')


    });

    it('New',async () => {

        await expect(browser).toHaveUrl('https://automationexercise.com/')
        await expect(browser).toHaveTitle('Automation Exercise')

    });

    it('New 2', async () => {
        const title = await $("//img[@alt='Website for automation practice']")
        await expect(title).toBeDisplayed
    });
});