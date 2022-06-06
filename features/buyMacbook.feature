Feature: Buy a laptop

@smoke
Scenario: As a user, I can buy a macbook Pro

    Given I am in Home Page Loged
    When Click In  Laptops and click in Macbook Pro
    When Add to cart
    When Appears Alert message and click Aceptar
    When Click in Cart
    Then Appears a total price of 1,100.00
