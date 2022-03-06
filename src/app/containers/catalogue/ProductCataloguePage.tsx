import { Box, styled } from "@mui/material";
import { getProducts } from "api/products/getProducts";
import { mapToProduct, Product } from "app/models/Product";
import React, { useEffect, useState } from "react";

import { ProductCatalogueHeader } from "./ProductCatalogueHeader";
import { ProductCatalogue } from "./ProductCatalogue";
import { ProductCatalogueFilters } from "./ProductCatalogueFilters";
import { PaginationCatalogue } from "./PaginationCatalogue";

const CatalogueWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#F2F2F2",
}));

export const ProductCataloguePage: React.VFC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeValue, setActiveValue] = useState<boolean>(false);
  const [promoValue, setPromoValue] = useState<boolean>(false);
  const [totalPages, setTotalPagesValue] = useState<number>(0);
  const [currentPageValue, setCurrentPageValue] = useState<number>(1);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts({
      search: searchValue,
      active: activeValue ? true : undefined,
      promo: promoValue ? true : undefined,
      page: currentPageValue,
      limit: 8,
    })
      .then((response) => {
        const newProducts = response.items.map(mapToProduct);
        setProducts(newProducts);
        setTotalPagesValue(response.meta.totalPages);
      })
      .catch((error) => console.error(error));
  }, [searchValue, activeValue, promoValue, currentPageValue]);

  return (
    <>
      <ProductCatalogueHeader>
        <ProductCatalogueFilters
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          activeValue={activeValue}
          setActiveValue={setActiveValue}
          promoValue={promoValue}
          setPromoValue={setPromoValue}
        />
      </ProductCatalogueHeader>
      <CatalogueWrapper alignItems="center">
        <PaginationCatalogue
          totalPages={totalPages}
          value={currentPageValue}
          onChange={setCurrentPageValue}
        />
        <ProductCatalogue products={products} />
      </CatalogueWrapper>
    </>
  );
};
