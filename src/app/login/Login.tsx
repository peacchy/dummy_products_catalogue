import { Button, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";

const LoginPage = styled("div")({
  display: "flex",
});

const LoginPanel = styled("div")({
  width: "100%",
});

const Header = styled(Typography)({
  fontSize: 30,
});

const LoginButton = styled(Button)({
  textTransform: "none",
  width: "100%",
});

const Input = styled(TextField)({
  width: "100%",
});

const ForgotPassword = styled(Typography)({
  textDecoration: "underline",
  color: "#9194A5",
  fontSize: 14,
});

export const Login = () => {
  return (
    <LoginPage>
      <img src="https://picsum.photos/604/1024"></img>
      <LoginPanel>
        <Link to={AppRoute.home}>Products page</Link>
        <Header>Login</Header>
        <form>
          <div>
            <Typography>Username:</Typography>
            <Input name="username" size="small" placeholder="Enter username" />
          </div>
          <div>
            <Typography>Password:</Typography>
            <Input
              name="password"
              type="password"
              size="small"
              placeholder="Enter password"
            />
          </div>
          <LoginButton type="submit" variant="contained">
            Log in
          </LoginButton>
        </form>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </LoginPanel>
    </LoginPage>
  );
};
