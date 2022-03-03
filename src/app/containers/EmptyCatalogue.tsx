import React from "react";
import { Box, Paper, styled, Typography } from "@mui/material";

import { ReactComponent as NoteIcon } from "../../assets/Note.svg";

const Empty = styled(Paper)(({ theme }) => ({
  borderRadius: "8px",
  width: "600px",
  height: "344px",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  //   flexGrow: 0,
  //   flexShrink: 0,
}));

const Header = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  marginBottom: theme.spacing(1),
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "#9194A5",
}));

const Icon = styled(NoteIcon)(({ theme }) => ({
  width: "36px",
  height: "45px",
  marginBottom: theme.spacing(2),
}));

export const EmptyCatalogue = () => {
  return (
    <Empty elevation={0}>
      <Icon />
      <Header>Ooops... It's empty here</Header>
      <Description>There are no products on the list</Description>
    </Empty>
  );
};
