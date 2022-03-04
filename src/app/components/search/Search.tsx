import * as React from "react";
import { OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search: React.VFC<SearchProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <OutlinedInput
      placeholder="Search"
      value={value}
      onChange={handleChange}
      endAdornment={<SearchIcon />}
    />
  );
};
