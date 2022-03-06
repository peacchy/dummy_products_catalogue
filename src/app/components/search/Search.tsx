import * as React from "react";
import { OutlinedInput, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = styled(OutlinedInput)(({ theme }) => ({
  width: "392px",
}));

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search: React.VFC<SearchProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <SearchBar
      placeholder="Search"
      value={value}
      onChange={handleChange}
      endAdornment={<SearchIcon />}
    />
  );
};
