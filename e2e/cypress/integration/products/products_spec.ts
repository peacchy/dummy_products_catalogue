/// <reference types="Cypress" />

import { NavigationMenu } from "../../pages/Navigation";

context("HomePage should", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("display products page", () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get("[data-testid=product-catalogue-page]").should("be.visible");
  });
});
