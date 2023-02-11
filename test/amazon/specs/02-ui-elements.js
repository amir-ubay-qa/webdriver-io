import Signin from "../pageobjects/signin.page.js"

describe('Verify ui elements of pages', () => {
   beforeEach(async () => {
      await browser.url('https://www.amazon.com')
   })

   it('Verify sign in page elements with page objects', async () => {
      await Signin.open();
      await Signin.verifyTitle("Sign in");
      await Signin.verifySubmitButton();
      await Signin.verifyLegalText();
      await Signin.clickNeedHelp();
      await Signin.verifyBtnForgotPassword();
      await Signin.verifyBtnIssueSignin();
      await Signin.verifyBtnCreateAccount();
   })

   it('Verify create account page elements wihtout page objects', async () => {
      const btnCreateAccount = await $('#createAccountSubmit')
      const btnSignIn = await $('#nav-link-accountList');
      const titlePage = await $('h1.a-spacing-small');
      const labelName = await $('label[for="ap_customer_name"]')
      const inputName = await $('input#ap_customer_name')
      const labelEmail = await $('label[for="ap_email"]')
      const inputEmail = await $('input#ap_email')
      const labelPassword = await $('label[for="ap_password"]')
      const inputPassword = await $('#ap_password')
      const labelPasswordCheck = await $('label[for="ap_password_check"]')
      const inputPasswordCheck = await $('input#ap_password_check')
      const btnSubmit = await $('input#continue')
      const legalText = await $('#legalTextRow')
      const btnBackSignin = await $('a*=Sign in')
      const btnCreateBusinessAccount = await $('a*=Create a free business account')


      await btnSignIn.click();
      await expect(browser).toHaveTitle('Amazon Sign-In')
      await btnCreateAccount.click();
      await expect(browser).toHaveTitle('Amazon Registration')
      await expect(titlePage).toHaveText('Create account')
      await expect(labelName).toHaveText('Your name')
      await expect(inputName).toBeDisplayed()
      await expect(labelEmail).toHaveText('Mobile number or email')
      await expect(inputEmail).toBeDisplayed()
      await expect(labelPassword).toHaveText('Password')
      await expect(inputPassword).toBeDisplayed()
      await expect(labelPasswordCheck).toHaveText('Re-enter password')
      await expect(inputPasswordCheck).toBeDisplayed()
      await expect(btnSubmit).toBeDisplayed()
      await expect(legalText).toBeDisplayed()
      await expect(btnBackSignin).toBeDisplayed()
      await expect(btnCreateBusinessAccount).toBeDisplayed()
   })
})