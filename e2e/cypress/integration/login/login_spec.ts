import { NavigationMenu } from "../../pages/Navigation";

describe("Login page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("should login user into application", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.findByPlaceholderText(/enter username/i).type("daria");
    cy.findByPlaceholderText(/enter password/i).type("daria");
    cy.findByRole("button", { name: /log in/i }).click();
    cy.wait(3000);
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.findByRole("img", { name: /daria/i }).should("be.visible");
  });

  it("should display error when invalid password is provided", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.findByPlaceholderText(/enter username/i).type("daria");
    cy.findByPlaceholderText(/enter password/i).type("test123");
    cy.findByRole("button", { name: /log in/i }).click();
    cy.wait(3000);
    cy.findByRole("button", { name: /log in/i }).should("not.be.disabled");
    cy.contains("Invalid user or password");
  });

  it("should display error when invalid username is provided", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.findByPlaceholderText(/enter username/i).type("test123");
    cy.findByPlaceholderText(/enter password/i).type("test123");
    cy.findByRole("button", { name: /log in/i }).click();
    cy.wait(3000);
    cy.findByRole("button", { name: /log in/i }).should("not.be.disabled");
    cy.contains("No user found");
  });

  it("should display error when no password is provided", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.findByPlaceholderText(/enter username/i).type("daria");
    cy.findByRole("button", { name: /log in/i }).click();
    cy.wait(3000);
    cy.findByRole("button", { name: /log in/i }).should("not.be.disabled");
    cy.contains("password must be longer than or equal to 3 characters");
  });

  it("should display error when no credentials are provided", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.findByRole("button", { name: /log in/i }).click();
    cy.wait(3000);
    cy.findByRole("button", { name: /log in/i }).should("not.be.disabled");
    cy.contains("password must be longer than or equal to 3 characters");
  });

  it("should display meme when 'Forgot password? is clicked", () => {
    cy.clearSession();
    NavigationMenu.goToLogin();
    cy.findByRole("button", { name: /forgot password\?/i }).click();
    cy.findByTestId("meme").should("be.visible");
  });
});
