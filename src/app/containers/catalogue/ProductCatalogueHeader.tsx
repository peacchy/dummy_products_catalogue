import * as React from "react";
import { Stack, styled, Typography } from "@mui/material";
import { UserMenu } from "../user/UserMenu";
import { UserContext } from "providers/UserProvider";
import { useContext } from "react";
import { LoginButton } from "app/components/inputs/LoginButton";

const Bar = styled(Stack)(({ theme }) => ({
  height: "144px",
  padding: "0 108px",
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: 24,
}));

export const ProductCatalogueHeader: React.FC = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <Bar direction="row" alignItems="center" justifyContent="space-between">
      <Logo noWrap>join.tsh.io</Logo>
      {children}
      {user ? <UserMenu /> : <LoginButton />}
    </Bar>
  );
};
