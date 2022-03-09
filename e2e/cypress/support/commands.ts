import "@testing-library/cypress/add-commands";

Cypress.Commands.add("clearSession", () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});
