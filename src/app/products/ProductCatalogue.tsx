import { Grid, Paper } from "@mui/material";
import { getProducts } from "api/products/getProducts";
import { useProductsApi } from "api/products/useProductsApi";
import { mapToProduct, Product } from "app/models/Product";
import { ProductCard } from "app/product/ProductCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";

export const ProductCatalogue = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        const newProducts = response.items.map(mapToProduct);

        setProducts(newProducts);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Link to={AppRoute.login}> Login </Link>

      <Grid container rowSpacing={2} columns={4}>
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
    </>
  );
};
