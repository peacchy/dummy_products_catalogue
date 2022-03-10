import { Box, Grid, styled } from "@mui/material";
import { Product } from "app/models/Product";
import { ProductCard } from "app/components/product/ProductCard";
import React from "react";

import { EmptyCatalogue } from "./EmptyCatalogue";
import { PaginationCatalogue } from "./PaginationCatalogue";

const Products = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(7, 12),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
  },
}));

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
    <Box height="100%" data-testid="product-catalogue">
      <Products
        container
        rowSpacing={3}
        columnSpacing={10}
        // paddingY={7}
        // paddingX={12}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {products.map((product, index) => (
          <Grid
            item
            key={product.id}
            xs={1}
            data-testid={`product-card-${index}`}
          >
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
      </Products>
      <PaginationCatalogue
        totalPages={totalPages}
        value={page}
        onChange={onPageChange}
      />
    </Box>
  );
};
