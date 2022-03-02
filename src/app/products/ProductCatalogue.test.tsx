import React from "react";

import { render } from "tests";

import { ProductCatalogue } from "./ProductCatalogue";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getByText } = render(<ProductCatalogue />);

    expect(getByText("Products page")).toBeInTheDocument();
  });
});
