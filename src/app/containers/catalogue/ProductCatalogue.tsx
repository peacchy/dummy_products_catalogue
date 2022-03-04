import { Grid } from "@mui/material";
import { Product } from "app/models/Product";
import { ProductCard } from "app/components/product/ProductCard";
import React from "react";

import { EmptyCatalogue } from "./EmptyCatalogue";

interface ProductCatalogueProps {
  products: Product[];
}

export const ProductCatalogue: React.VFC<ProductCatalogueProps> = ({
  products,
}) => {
  if (!products.length) {
    <EmptyCatalogue />;
  }

  return (
    <Grid
      container
      rowSpacing={2}
      columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
      margin={0}
      justifyContent="center"
    >
      {products.map((product) => (
        <Grid item xs={1}>
          <ProductCard
            description={product.description}
            image={product.image}
            name={product.name}
            rating={product.rating}
            promo={product.promo}
            active={product.active}
          />
        </Grid>
      ))}
    </Grid>
  );
};
