export default class Page {
   constructor() {
      this.title = 'Page'
   }

   async open (path) {
      await browser.url(path)
   }
}