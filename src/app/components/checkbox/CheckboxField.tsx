import React from "react";
import { VFC } from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { Box, Stack, Typography } from "@mui/material";

import { ReactComponent as CheckboxEmptyIcon } from "../../../assets/CheckboxEmpty.svg";
import { ReactComponent as CheckboxFull } from "../../../assets/CheckboxFull.svg";
import { ReactComponent as CheckboxFullTickIcon } from "../../../assets/CheckboxFullTick.svg";

interface CheckboxProps {
  label: string;
}

export const CheckboxField: VFC<CheckboxProps> = ({ label }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Checkbox
      // icon={<CheckboxEmptyIcon />}
      // checkedIcon={<CheckboxFullIcon />} //change icon
      />
      <Typography>{label}</Typography>
    </Stack>
  );
};

const CheckboxFullIcon: React.VFC = () => {
  return (
    <Box>
      <CheckboxFull style={{ position: "absolute" }} />
      <CheckboxFullTickIcon style={{ position: "absolute" }} />
    </Box>
  );
};
