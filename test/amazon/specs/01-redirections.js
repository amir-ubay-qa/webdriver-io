describe('Verify redirection link with page title', () => {
   beforeEach( async () => {
      await browser.url('https://www.amazon.com')
   })

   it('Verify homepage page title', async () => {
      await expect(browser).toHaveTitle('Amazon.com. Spend less. Smile more.')
   })
   it('Verify signin page can be accessed', async () => {
      // Variables
      const btnSignIn = await $('#nav-link-accountList')

      // Test
      await btnSignIn.click()
      await expect(browser).toHaveTitle('Amazon Sign-In')
   })
   it('Verify cart page can be accessed', async () => {
      // Variables
      const btnCart = await $('#nav-cart-count-container')

      // Test
      await btnCart.click()
      await expect(browser).toHaveTitle('Amazon.com Shopping Cart')
   })
   it('Verify todays deals page can be accessed', async () => {
      // Variables
      const btnTodaysDeals = await $(".nav-a=Today's Deals")

      // Test
      await btnTodaysDeals.click()
      await expect(browser).toHaveTitle("Amazon.com - Today's Deals")
   })
   it('Verify customer page can be accessed', async () => {
      // Variables
      const btnTodaysDeals = await $(".nav-a=Customer Service")

      // Test
      await btnTodaysDeals.click()
      await expect(browser).toHaveTitle("Amazon Customer Service Support – Amazon.com")
   })
   it('Verify registry page can be accessed', async () => {
      // Variables
      const btnTodaysDeals = await $(".nav-a=Registry")

      // Test
      await btnTodaysDeals.click()
      await expect(browser).toHaveTitle("Amazon Registry & Gifting")
   })
   it('Verify gift cards page can be accessed', async () => {
      // Variables
      const btnTodaysDeals = await $(".nav-a=Gift Cards")

      // Test
      await btnTodaysDeals.click()
      await expect(browser).toHaveTitle("Amazon.com Gift Cards")
   })
   it('Verify sell page can be accessed', async () => {
      // Variables
      const btnTodaysDeals = await $(".nav-a=Sell")

      // Test
      await btnTodaysDeals.click()
      await expect(browser).toHaveTitle("Amazon.com: Sell Products Online with Selling on Amazon.")
   })
})