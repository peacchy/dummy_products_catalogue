import React from "react";
import { VFC } from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

interface CheckboxProps {
  label: string;
}

export const CheckboxField: VFC<CheckboxProps> = ({ label }) => {
  return (
    <>
      <Checkbox />
      <Typography>{label}</Typography>
    </>
  );
};
