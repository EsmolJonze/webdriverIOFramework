const { Given, When, Then } = require("@wdio/cucumber-framework");

// Scenario: As a user, I can log into the secure area

Given(/^I am on webpage$/, async () => {
  await browser.url("https://www.demoblaze.com/index.html");
});

When(/^Click In Log in and enter <Patri> and <3384>$/, async () => {
  const loginLink = $("#login2");
  const loginModal = $('#logInModal');
  const usernameInput = $("#loginusername");
  const passwordInput = $("#loginpassword");
  await loginLink.click();
  await loginModal.waitForDisplayed();
  await usernameInput.setValue("Patri");
  await passwordInput.setValue('3384');
});

When(/^I click in Log In button$/, async () => {
  await $('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
});

Then(/^Appears a message <Welcome Patri>$/, async () => {
  const userName = $("#nameofuser");

  await expect(userName).toHaveText("Welcome Patri");
});
