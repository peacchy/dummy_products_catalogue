/// <reference types="Cypress" />

import { NavigationMenu } from "../../pages/Navigation";

context("HomePage should", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("navigate to login on clicking login", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });
});

context("LoginPage should", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env().baseUrl}/login`);
  });

  it("navigate to home on clicking logo", () => {
    cy.clearSession();
    NavigationMenu.goToHome();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });
});
