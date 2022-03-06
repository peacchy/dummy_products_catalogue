import { Stack } from "@mui/material";
import { CheckboxField } from "app/components/checkbox/CheckboxField";
import { Search } from "app/components/search/Search";
import React, { useState } from "react";

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
    <Stack direction="row" spacing={3}>
      <Search value={searchValue} onChange={setSearchValue} />
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
    </Stack>
  );
};
