import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./UserProvider";

const theme = createTheme({
  typography: {
    fontFamily: `Nunito, sans-serif`,
    fontWeightRegular: 600,
  },
});

export const AppProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <Router>{children}</Router>
    </UserProvider>
  </ThemeProvider>
);
