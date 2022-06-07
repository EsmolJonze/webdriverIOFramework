const { Given, When, Then } = require("@wdio/cucumber-framework");  
const totalPrice = $("#totalp");
const fornName = $("#name");
const formCountry = $("#country");
const formCity = $("#city");
const formCard = $("#card");
const formMonth = $("#month");
const formYear = $("#year");

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
  await browser.pause(1000);
  await browser.acceptAlert();
});

When(/^Click in Cart$/, async () => {
  await $("a=Cart").click();
});

Then(/^Appears a total price of 1,100.00$/, async () => {
  await expect(browser).toHaveUrlContaining('cart');
  await expect(totalPrice).toHaveText("1100");
});

Then(/^Complete the form and click In Purchase$/, async () => {
  await browser.pause(2000);
  await $("button=Place Order").click();
  await fornName.waitForDisplayed();
  await fornName.setValue("Patri");
  await formCountry.setValue("Catalunya");
  await formCity.setValue("Barcelona");
  await formCard.setValue("4035 5010 0000 0008");
  await formMonth.setValue("June");
  await formYear.setValue("2022");
  await $("button=Purchase").click();
  await $("button=OK").click();
});