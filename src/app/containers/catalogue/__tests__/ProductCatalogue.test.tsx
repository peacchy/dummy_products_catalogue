import { render, screen } from "@testing-library/react";
import React from "react";
import { ProductCatalogue } from "../ProductCatalogue";

it("should show information about empty catalogue when there is no products", () => {
  const onPageChange = jest.fn();

  render(
    <ProductCatalogue
      products={[]}
      totalPages={0}
      page={0}
      onPageChange={onPageChange}
    />
  );

  expect(screen.getByTestId("empty-catalogue")).toBeInTheDocument();
});
