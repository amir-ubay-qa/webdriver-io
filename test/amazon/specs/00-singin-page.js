import SigninPage from "../pageobjects/signin.page.js";

describe('Go to singin page', () => {
   it('Signin page can be visited', async () => {
      await SigninPage.open();
      await expect(browser).toHaveTitle('Amazon Sign-In')
   })
})