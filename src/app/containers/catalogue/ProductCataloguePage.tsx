import { Box, styled } from "@mui/material";
import { getProducts } from "api/products/getProducts";
import { mapToProduct, Product } from "app/models/Product";
import React, { useEffect, useState } from "react";

import { ProductCatalogueHeader } from "./ProductCatalogueHeader";
import { ProductCatalogue } from "./ProductCatalogue";
import { ProductCatalogueFilters } from "./ProductCatalogueFilters";
import { PaginationCatalogue } from "./PaginationCatalogue";
import { Loading } from "app/components/loading/Loading";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

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
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [searchValue, activeValue, promoValue, currentPageValue]);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      data-testid="product-catalogue-page"
    >
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

      <CatalogueWrapper
        display="flex"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        {isLoading ? (
          <Loading />
        ) : (
          <ProductCatalogue
            products={products}
            totalPages={totalPages}
            page={currentPageValue}
            onPageChange={setCurrentPageValue}
          />
        )}
      </CatalogueWrapper>
    </Box>
  );
};
