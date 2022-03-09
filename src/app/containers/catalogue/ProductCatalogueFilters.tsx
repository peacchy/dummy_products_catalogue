import { Stack, styled } from "@mui/material";
import { CheckboxField } from "app/components/checkbox/CheckboxField";
import { Search } from "app/components/search/Search";
import React, { useState } from "react";

const Filters = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

const SearchFilter = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: theme.spacing(3),
  },
}));

interface ProductCatalogueFiltersProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  activeValue: boolean;
  setActiveValue: (value: boolean) => void;
  promoValue: boolean;
  setPromoValue: (value: boolean) => void;
}

export const ProductCatalogueFilters: React.VFC<
  ProductCatalogueFiltersProps
> = ({
  searchValue,
  setSearchValue,
  activeValue,
  setActiveValue,
  promoValue,
  setPromoValue,
}) => {
  return (
    <Filters direction="row" spacing={3}>
      <SearchFilter flexGrow={1} maxWidth={500}>
        <Search value={searchValue} onChange={setSearchValue} />
      </SearchFilter>
      <CheckboxField
        label="Active"
        value={activeValue}
        onChange={setActiveValue}
      />
      <CheckboxField
        label="Promo"
        value={promoValue}
        onChange={setPromoValue}
      />
    </Filters>
  );
};
