import * as React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import { UserMenu } from "../user/UserMenu";
import { UserContext } from "providers/UserProvider";
import { useContext } from "react";
import { LoginButton } from "app/components/inputs/LoginButton";

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexBasis: "13%",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
    flexWrap: "wrap",
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  [theme.breakpoints.down("md")]: {
    order: 1,
  },
}));

const Filters = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    order: 3,
  },
}));

const Login = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    order: 2,
  },
}));

export const ProductCatalogueHeader: React.FC = ({ children }) => {
  const { user, clearUser } = useContext(UserContext);

  return (
    <Header>
      <Stack alignItems="center" flexGrow={2}>
        <Logo noWrap>join.tsh.io</Logo>
      </Stack>
      <Filters flexGrow={4}>{children}</Filters>
      <Login alignItems="center" flexGrow={2}>
        {user ? <UserMenu user={user} onLogout={clearUser} /> : <LoginButton />}
      </Login>
    </Header>
  );
};
