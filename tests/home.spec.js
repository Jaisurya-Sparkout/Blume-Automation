const {test,expect}= require('@playwright/test');

test('Home page',async({page})=>{

    await page.goto("https://dev-app.blumehealth.com");

    // Clear all local storage data
    await page.evaluate(() => window.localStorage.clear());

    // Clear all session storage data
    await page.evaluate(() => window.sessionStorage.clear());

    await page.waitForTimeout(2000);

    // const pageTitle = await page.title();
    // console.log("Page Title:",pageTitle);

    // await expect(page).toHaveTitle("Blume");

    // const url=page.url();
    // console.log("Current URL:",url);

    // await expect(page).toHaveURL("https://dev-app.blumehealth.com");

    await page.locator("//button").click();
    await page.getByText('Male', { exact: true }).click();
    await page.getByText('None of the above', { exact: true }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('None of the above', { exact: true }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Got it!' }).click();
    await page.locator("(//span[normalize-space()='None of the above'])[1]").click();
    await page.locator("//span[normalize-space()='Not sure, recommend for me']").click();
    await page.locator("//input[@type='tel']").fill("12121991");
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@type='text']").fill("183");
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@type='text']").fill("95");
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//body/div/div/div/div/div/div[1]").click();
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//span[normalize-space()='None of the above']").click();
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//button[normalize-space()='I understand']").click();
    await page.locator("//input[@type='text']").fill("85");
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("body > div:nth-child(19) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > span:nth-child(1)").click();
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//button[normalize-space()='Continue']").click();
    await page.locator("//input[@id='email']").fill("testuser0114@yopmail.com");
    await page.waitForTimeout(2000);

    await page.close();



})