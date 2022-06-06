Feature: Login In DomeBlaze

 @smoke
 Scenario: As a user, I can log into the secure area

  Given I am on webpage
  When Click In Log in and enter <Patri> and <3384>
  When I click in Log In button
  Then Appears a message <Welcome Patri>
