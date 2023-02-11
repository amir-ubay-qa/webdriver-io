import Page from "./page.js"

class SigninPage extends Page {
   get btnSignIn () { return $('#nav-link-accountList') }
   get titlePage () { return $('h1.a-spacing-small') }
   get labelEmail () { return $('label[for="ap_email"]') }
   get inputEmail () { return $('input#ap_email') }
   get btnSubmit () { return $('input#continue') }
   get legalText () { return $('#legalTextRow') }
   get btnNeedHelp () { return $('span*=Need help') }
   get btnForgotPassword () { return $('#auth-fpp-link-bottom') }
   get btnIssueSignin () { return $('#ap-other-signin-issues-link') }
   get btnCreateAccount () { return $('#createAccountSubmit') }

   async open () {
      await super.open('https://www.amazon.com')
      await this.btnSignIn.click()
      await expect(browser).toHaveTitleContaining("Sign-In")
   }

   async verifyTitle (text) {
      await expect(this.titlePage).toHaveText(text)
   }

   async verifyInputEmail (label) {
      await expect(this.labelEmail).toHaveTextContaining(label)
      await expect(this.inputEmail).toBeDisplayed()
   }

   async verifySubmitButton () {
      await expect(this.btnSubmit).toBeDisplayed()
   }

   async verifyLegalText () {
      await expect(this.legalText).toBeDisplayed()
   }

   async clickNeedHelp () {
      await this.btnNeedHelp.click();
   }

   async verifyBtnForgotPassword () {
      await expect(this.btnForgotPassword).toBeDisplayed()
   }

   async verifyBtnIssueSignin () {
      await expect(this.btnIssueSignin).toBeDisplayed()
   }

   async verifyBtnCreateAccount () {
      await expect(this.btnCreateAccount).toBeDisplayed()

   }
}

export default new SigninPage