describe("Product catalogue page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("opens details modal of product", () => {
    cy.get("[data-testid=product-card-0]")
      .within(() => {
        return cy.get("[data-testid=show-details-button]");
      })
      .click();
    cy.get("[data-testid=product-details-modal]").should("be.visible");
  });

  it("searches products with certain phrase", () => {
    cy.findByPlaceholderText(/search/i).type("steel");
  });
});
