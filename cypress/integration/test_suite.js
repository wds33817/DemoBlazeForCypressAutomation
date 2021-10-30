/// <reference types="cypress" />

describe("test demo blaze app", () => {
  beforeEach(() => {
    cy.visit("https://demoblaze.com/");
  });

  it("display login page", () => {
    cy.get("#signin2").should("have.text", "Sign up");
    cy.get("#login2")
      .contains("Log in")
      .click();
    cy.wait(1000);
    cy.get("#loginusername").type("admin", { delay: 100 });
    cy.get("#loginpassword").type("admin", { delay: 100 });
    cy.wait(1000);
    cy.get(".btn.btn-primary")
      .contains("Log in")
      .click();
    cy.get("#nameofuser").should("have.text", "Welcome admin");
    cy.get("#logout2")
      .contains("Log out")
      .click();
    cy.get("#signin2").should("have.text", "Sign up");
  });

  it("start purchasing", () => {
    cy.get("#login2")
      .contains("Log in")
      .click();
    cy.wait(1000);
    cy.get("#loginusername").type("admin", { delay: 100 });
    cy.get("#loginpassword").type("admin", { delay: 100 });
    cy.wait(1000);
    cy.get(".btn.btn-primary")
      .contains("Log in")
      .click();
    cy.get("#nameofuser").should("have.text", "Welcome admin");
    cy.contains("Nokia lumia 1520").click();
    cy.contains("Add to cart").click();
    cy.contains("Add to cart").click();
    cy.go("back");
    cy.go("back");
    cy.contains("Sony vaio i5").click();
    cy.contains("Add to cart").click();
    cy.go("back");
    cy.go("back");
    cy.wait(3000);
    cy.location("pathname").should("eq", "/");
    cy.get("#next2").click();
    cy.contains("ASUS Full HD").click();
    cy.contains("Add to cart").click();
    cy.contains("Add to cart").click();
    cy.go("back");
    cy.go("back");
  });

  it("start to place order", () => {
    cy.get("#login2")
      .contains("Log in")
      .click();
    cy.wait(1000);
    cy.get("#loginusername").type("admin", { delay: 100 });
    cy.get("#loginpassword").type("admin", { delay: 100 });
    cy.wait(1000);
    cy.get(".btn.btn-primary")
      .contains("Log in")
      .click();
    cy.get("#nameofuser").should("have.text", "Welcome admin");
    cy.contains("Cart").click();
    cy.wait(3000);
    cy.get("#tbodyid > tr:nth-child(1) > td:nth-child(4) > a").click();
    cy.wait(3000);
    cy.contains("Place Order").click();
    cy.get("#name").type("james");
    cy.get("#country").type("Australia");
    cy.get("#city").type("Sydney");
    cy.get("#card").type("12345678901234567891");
    cy.get("#month").type("01");
    cy.get("#year").type("2021");
    cy.contains("Purchase").click();
    cy.get(".sweet-alert")
      .find("h2")
      .should("have.text", "Thank you for your purchase!");
  });
});
