import { Button, styled, TextField, Typography } from "@mui/material";
import { UserContext } from "providers/UserProvider";
import React, { useContext, useState } from "react";
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

export const Login: React.VFC = () => {
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState<string>();

  const handleLogin = () => {
    if (username) {
      setUser(username);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <LoginPage>
      <img src="https://picsum.photos/604/1024"></img>
      <LoginPanel>
        <Header>Login</Header>
        <form>
          <div>
            <Typography>Username:</Typography>
            <Input
              name="username"
              size="small"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
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
          <Link to={AppRoute.home} style={{ textDecoration: "none" }}>
            <LoginButton
              type="submit"
              variant="contained"
              onClick={handleLogin}
            >
              Log in
            </LoginButton>
          </Link>
        </form>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </LoginPanel>
    </LoginPage>
  );
};
