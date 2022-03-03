import { Grid, Paper, styled } from "@mui/material";
import { getProducts } from "api/products/getProducts";
import { useProductsApi } from "api/products/useProductsApi";
import { mapToProduct, Product } from "app/models/Product";
import { ProductCard } from "app/components/product/ProductCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";
import { EmptyCatalogue } from "../EmptyCatalogue";
import { DescriptionModal } from "app/components/modal/DescriptionModal";

const Catalogue = styled("div")(({ theme }) => ({
  backgroundColor: "#F2F2F2",
}));

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
    <Catalogue>
      <Link to={AppRoute.login}> Login </Link>
      {/* <EmptyCatalogue /> */}
      <DescriptionModal
        description="Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat."
        image="https://picsum.photos/640/480?random=4946"
        name="Awesome Steel Fish"
      />

      {/* <Grid container rowSpacing={2} columns={4}>
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
      </Grid> */}
    </Catalogue>
  );
};
