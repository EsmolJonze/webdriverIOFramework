const { Given, When, Then } = require("@wdio/cucumber-framework");


// Scenario: Log with anonimous user

Given(/^I am in Sign In page$/, async () => {
    await browser.url("https://fakeflix.th3wall.codes");
});


When(/^Click in Sign In anonymously$/, async () => {
    await $("button=Sign in anonymously").click();
});

Then(/^redirect to welcome page$/, async () => {
    await expect(browser).toHaveUrlContaining('browse');

});



