import { Stack } from "@mui/material";
import { CheckboxField } from "app/components/checkbox/CheckboxField";
import { Search } from "app/components/search/Search";
import React, { useState } from "react";

export const ProductCatalogueFilters: React.VFC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Stack direction="row">
      <Search value={searchValue} onChange={setSearchValue} />
      <CheckboxField label={"Active"} />
      <CheckboxField label={"Promo"} />
    </Stack>
  );
};
