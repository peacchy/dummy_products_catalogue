import React from "react";
import { VFC } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Stack, Typography } from "@mui/material";

import { ReactComponent as CheckboxEmptyIcon } from "../../../assets/CheckboxEmpty.svg";
import { ReactComponent as CheckboxFullIcon } from "../../../assets/CheckboxFull.svg";

interface CheckboxProps {
  label: string;
  filterName: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const CheckboxField: VFC<CheckboxProps> = ({
  label,
  filterName,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      data-testid={`checkbox-filter-${filterName}`}
    >
      <Checkbox
        icon={<CheckboxEmptyIcon />}
        checkedIcon={<CheckboxFullIcon />}
        value={value}
        onChange={handleChange}
      />
      <Typography fontSize={14}>{label}</Typography>
    </Stack>
  );
};
