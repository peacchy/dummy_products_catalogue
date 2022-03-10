import { CircularProgress, styled } from "@mui/material";
import React from "react";

const Loader = styled(CircularProgress)({
  color: "#4460F7",
  borderRadius: "100%",
  boxShadow: "inset 0 0 0px 4px #E0E2EA",
});

export const Loading: React.VFC = () => {
  return <Loader size={56} thickness={3} />;
};
