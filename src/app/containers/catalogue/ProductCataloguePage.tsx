import { Box, styled } from "@mui/material";
import { getProducts } from "api/products/getProducts";
import { mapToProduct, Product } from "app/models/Product";
import React, { useEffect, useState } from "react";

import { ProductCatalogueHeader } from "./ProductCatalogueHeader";
import { ProductCatalogue } from "./ProductCatalogue";
import { ProductCatalogueFilters } from "./ProductCatalogueFilters";

const CatalogueWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#F2F2F2",
}));

export const ProductCataloguePage: React.VFC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts({})
      .then((response) => {
        const newProducts = response.items.map(mapToProduct);
        setProducts(newProducts);
      })
      .catch((error) => console.error(error));
    console.log(products);
  }, []);

  return (
    <>
      <ProductCatalogueHeader>
        <ProductCatalogueFilters />
      </ProductCatalogueHeader>
      <CatalogueWrapper alignItems="center">
        <ProductCatalogue products={products} />
      </CatalogueWrapper>
    </>
  );
};
