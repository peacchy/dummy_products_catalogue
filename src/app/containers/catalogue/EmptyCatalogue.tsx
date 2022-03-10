import React from "react";
import { Paper, styled, Typography } from "@mui/material";

import { ReactComponent as NoteIcon } from "../../../assets/Note.svg";

const Empty = styled(Paper)(({ theme }) => ({
  borderRadius: "8px",
  width: "600px",
  height: "344px",
  margin: "auto",
  marginTop: theme.spacing(7),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  marginBottom: theme.spacing(1),
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: "#9194A5",
}));

const Icon = styled(NoteIcon)(({ theme }) => ({
  width: "36px",
  height: "45px",
  marginBottom: theme.spacing(2),
}));

export const EmptyCatalogue: React.VFC = () => {
  return (
    <Empty elevation={0} data-testid="empty-catalogue">
      <Icon />
      <Header>Ooops... It's empty here</Header>
      <Description>There are no products on the list</Description>
    </Empty>
  );
};
