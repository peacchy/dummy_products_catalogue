import { Box, Grid } from "@mui/material";
import { Product } from "app/models/Product";
import { ProductCard } from "app/components/product/ProductCard";
import React from "react";

import { EmptyCatalogue } from "./EmptyCatalogue";
import { PaginationCatalogue } from "./PaginationCatalogue";

interface ProductCatalogueProps {
  products: Product[];
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}

export const ProductCatalogue: React.VFC<ProductCatalogueProps> = ({
  products,
  totalPages,
  page,
  onPageChange,
}) => {
  if (!products.length) {
    return <EmptyCatalogue />;
  }

  return (
    <Box height="100%">
      <Grid
        container
        rowSpacing={3}
        columnSpacing={10}
        paddingY={7}
        paddingX={12}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={1}>
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
      <PaginationCatalogue
        totalPages={totalPages}
        value={page}
        onChange={onPageChange}
      />
    </Box>
  );
};
