import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { loginUser } from "api/login/loginUser";
import { ResponseErrorDto } from "api/ResponseErrorDto";
import { UserContext } from "providers/UserProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sideImage from "../../../assets/Login.jpg";
import meme from "../../../assets/meme.jpg";

import { AppRoute } from "routing/AppRoute.enum";
import { Logo } from "app/components/logo/Logo";
import { EmojiEmotions } from "@mui/icons-material";

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

const CompanyLogo = styled(Link)({
  textDecoration: "none",
  color: "#1A1B1D",
  "&:hover &:visited &:active": {
    color: "inherit",
  },
});

const ForgotPassword = styled(Button)({
  textDecoration: "underline",
  textTransform: "none",
  color: "#9194A5",
  fontSize: 14,
  width: "113px",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const Image = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  height: "10px",
}));

export const Login: React.VFC = () => {
  const { saveUser } = useContext(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isMeme, setIsMeme] = useState<boolean>(false);

  const handleLogin = () => {
    loginUser({ username, password })
      .then((response) => {
        saveUser({
          username: response.user.username,
          avatar: response.user.avatar,
          accessToken: response.access_token,
        });
      })
      .catch((error: Error) => {
        setError(error.message);
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
        <img src={sideImage} data-testid="meme" />
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
              <LoginButton variant="contained" onClick={handleLogin}>
                Log in
              </LoginButton>
              <ForgotPassword disableRipple onClick={() => setIsMeme(!isMeme)}>
                Forgot password?
              </ForgotPassword>
              {isMeme && <img width="220" height="150" src={meme} />}
            </Stack>
          </Stack>
        </form>
      </LoginPanel>
    </LoginPage>
  );
};
