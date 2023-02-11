# webdriver-io
Portfolio automate test with webdriver-io

## How To Run

1. Clone or fork this repository
2. Install the dependencies
   > npm install
3. Run the test runer
   > npx wdio

This test using spec reporter and headless chrome. Change the browser capabilites if you want to run in head mode.

## Amazon

### [1. Redirection](https://github.com/amir-ubay-qa/webdriver-io/blob/master/test/amazon/specs/01-redirections.js)

#### Home Page Redirection Links

1. Verify homepage title
2. Verify signin page can be accessed
3. Verify cart page can be accessed
4. Verify todays deal page can be accessed
5. Verify customer page can be accessed
6. Verify registry page can be accessed
7. Verify gift card page can be accessed
8. Verify sell page can be accessed

### [2. UI Elements](https://github.com/amir-ubay-qa/webdriver-io/blob/master/test/amazon/specs/02-ui-elements.js)

### Authentication pages

1. Verify sign page elements (with page objects)
2. Verify create account page elements (without page objects)