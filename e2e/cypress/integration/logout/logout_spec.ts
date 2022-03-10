import { NavigationMenu } from "../../pages/Navigation";

describe("Logout", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("should logout user from application", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.findByPlaceholderText(/enter username/i).type("daria");
    cy.findByPlaceholderText(/enter password/i).type("daria");
    cy.findByRole("button", { name: /log in/i }).click();
    cy.findByRole("img", { name: /daria/i }).should("be.visible").click();
    cy.findByRole("menuitem", { name: /logout/i }).click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });
});
