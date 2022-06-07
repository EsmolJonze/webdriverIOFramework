const { Given, When, Then } = require("@wdio/cucumber-framework");

//  Scenario: As a user, I can buy a macbook Pro

Given(/^I am in Home Page Loged$/, async () => {
  await browser.url("https://www.demoblaze.com/index.html");
});

When(/^Click In  Laptops and click in Macbook Pro$/, async () => {
  await $("a=Laptops").click();
  await $("a=MacBook Pro").click();
});

When(/^Add to cart$/, async () => {
  await $("a=Add to cart").click();
  await browser.saveScreenshot('screenshot.png');
});

Then(/^Appears Alert message and click Aceptar$/, async () => {
  await browser.pause(3000);
  await browser.acceptAlert();
});

When(/^Click in Cart$/, async () => {
  await $("a=Cart").click();
});

Then(/^Appears a total price of 1,100.00$/, async () => {
  const totalPrice = await $("#totalp");
  await expect(browser).toHaveUrlContaining('cart');
  await expect(totalPrice).toHaveText("1100");
});
