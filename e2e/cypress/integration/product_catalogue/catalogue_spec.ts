describe("Product catalogue page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("opens details modal of existing active product", () => {
    cy.findByTestId("checkbox-filter-active").click();
    cy.wait(3000);
    cy.findByTestId("product-card-0").within(() => {
      return cy.findByTestId("show-details-button").click();
    });

    cy.findByTestId("product-details-modal").should("be.visible");
  });

  it("displays products with certain search phrase", () => {
    cy.findByPlaceholderText(/search/i).type("steel");
    cy.contains("Steel");
  });

  it("displays products with 'active' filter", () => {
    cy.findByTestId("checkbox-filter-active").click();
    cy.wait(3000);
    cy.findByTestId("product-card-0")
      .should("be.visible")
      .within(() => {
        return cy.findByTestId("show-details-button").should("not.be.disabled");
      });
    cy.contains("Unavailable").should("not.exist");
  });

  it("displays products with 'promo' filter", () => {
    cy.findByTestId("checkbox-filter-promo").click();
    cy.wait(3000);
    cy.findByTestId("product-card-0").should("be.visible");
    cy.findByTestId("product-card-0").within(() => {
      return cy.findByText(/promo/i);
    });
  });

  it("displays products on second page if exsist", () => {
    cy.findByTestId("catalogue-pagination").scrollIntoView();
    cy.findByTestId("pagination-page-2").should("be.visible");
    cy.findByTestId("pagination-page-2").click();
    cy.findByTestId("pagination-page-2").should(
      "have.css",
      "color",
      "rgb(68, 96, 247)"
    );
    cy.findByTestId("product-card-0").should("be.visible");
  });

  it("displays information about not finding any products for certain search phrase", () => {
    cy.findByPlaceholderText(/search/i).type("123abc");
    cy.contains("There are no products on the list");
  });
});
