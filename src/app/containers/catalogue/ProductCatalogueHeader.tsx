import * as React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import { UserMenu } from "../user/UserMenu";
import { UserContext } from "providers/UserProvider";
import { useContext } from "react";
import { LoginButton } from "app/components/inputs/LoginButton";

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: 24,
}));

export const ProductCatalogueHeader: React.FC = ({ children }) => {
  const { user, clearUser } = useContext(UserContext);

  return (
    <Box display="flex" alignItems="center" flexBasis="13%">
      <Stack alignItems="center" flexGrow={2}>
        <Logo noWrap>join.tsh.io</Logo>
      </Stack>
      <Stack flexGrow={4}>{children}</Stack>
      <Stack alignItems="center" flexGrow={2}>
        {user ? <UserMenu user={user} onLogout={clearUser} /> : <LoginButton />}
      </Stack>
    </Box>
  );
};
