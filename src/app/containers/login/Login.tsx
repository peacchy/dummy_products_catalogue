import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { loginUser } from "api/login/loginUser";
import { UserContext } from "providers/UserProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import sideImage from "../../../assets/Login.jpg";
import meme from "../../../assets/meme.jpg";

import { AppRoute } from "routing/AppRoute.enum";
import { Logo } from "app/components/logo/Logo";
import { LoadingButton } from "@mui/lab";

const LoginPage = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(3),
  },
}));

const LoginPanel = styled(Stack)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(5, 10),
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(30),
}));

const LoginButton = styled(LoadingButton)({
  textTransform: "none",
  width: "100%",
});

const Input = styled(TextField)({
  width: "100%",
});

const CompanyLogo = styled(Link)({
  textDecoration: "none",
  color: "#1A1B1D",
  "&:hover &:visited &:active": {
    color: "inherit",
  },
});

const ForgotPassword = styled(Button)(({ theme }) => ({
  textDecoration: "underline",
  textTransform: "none",
  color: "#9194A5",
  fontSize: theme.typography.pxToRem(14),
  width: "113px",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const Image = styled(Box)(({ theme }) => ({
  display: "flex",
  maxHeight: "100vh",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  height: "10px",
}));

export const Login: React.VFC = () => {
  const { isLoggedIn, saveUser } = useContext(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMeme, setIsMeme] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push(AppRoute.home);
    }
  }, []);

  const handleLogin = () => {
    setIsLoading(true);

    loginUser({ username, password })
      .then((response) => {
        saveUser({
          username: response.user.username,
          avatar: response.user.avatar,
          accessToken: response.access_token,
        });

        history.push(AppRoute.home);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <LoginPage>
      <Image>
        <img src={sideImage} />
      </Image>
      <LoginPanel spacing={15}>
        <CompanyLogo to={AppRoute.home}>
          <Logo>join.tsh.io</Logo>
        </CompanyLogo>
        <form>
          <Stack spacing={6}>
            <Header>Login</Header>
            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography>Username:</Typography>
                <Input
                  name="username"
                  size="small"
                  placeholder="Enter username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography>Password:</Typography>
                <Input
                  name="password"
                  type="password"
                  size="small"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <ErrorMessage variant="caption">{error}</ErrorMessage>
              <LoginButton
                variant="contained"
                onClick={handleLogin}
                loading={isLoading}
              >
                Log in
              </LoginButton>
              <ForgotPassword disableRipple onClick={() => setIsMeme(!isMeme)}>
                Forgot password?
              </ForgotPassword>
              {isMeme && (
                <img width="220" height="150" src={meme} data-testid="meme" />
              )}
            </Stack>
          </Stack>
        </form>
      </LoginPanel>
    </LoginPage>
  );
};
