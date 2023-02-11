import Page from "./page.js";

class HomePage extends Page {
   open() {
      return super.goto('');
   }
   
   get btnSignIn () {
      return $('#nav-link-accountList')
   }
}

export default new HomePage