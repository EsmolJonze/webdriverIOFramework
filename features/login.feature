Feature: Login in FakeFlix

@smoke
Scenario: Log with anonimous user

Given I am in Sign In page
When Click in Sign In anonymously
Then redirect to welcome page