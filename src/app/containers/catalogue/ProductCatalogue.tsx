import { Grid, Box, styled } from "@mui/material";
import { getProducts } from "api/products/getProducts";
import { useProductsApi } from "api/products/useProductsApi";
import { mapToProduct, Product } from "app/models/Product";
import { ProductCard } from "app/components/product/ProductCard";
import React, { useEffect, useState } from "react";

import { EmptyCatalogue } from "./EmptyCatalogue";
import { DescriptionModal } from "app/components/modal/DescriptionModal";
import { ProductCatalogueHeader } from "./ProductCatalogueHeader";

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
    <Box>
      <Grid container rowSpacing={2} columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}>
        {products.map((product) => (
          <Grid item xs={1}>
            <ProductCard
              description={product.description}
              image={product.image}
              name={product.name}
              rating={product.rating}
            />
          </Grid>
        ))}
      </Grid>
      <DescriptionModal
        description="Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat."
        image="https://picsum.photos/640/480?random=4946"
        name="Awesome Steel Fish"
      />
    </Box>
  );
};
