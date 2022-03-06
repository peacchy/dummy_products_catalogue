import * as React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
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
  const { user, clearUser } = useContext(UserContext);

  return (
    <Bar direction="row" alignItems="center">
      <Logo noWrap>join.tsh.io</Logo>
      {children}
      <Box flexGrow={1} />
      {user ? <UserMenu user={user} onLogout={clearUser} /> : <LoginButton />}
    </Bar>
  );
};
