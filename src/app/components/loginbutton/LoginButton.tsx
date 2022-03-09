import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";

export const LoginButton: React.VFC = () => {
  return (
    <Link to={AppRoute.login} style={{ textDecoration: "none" }}>
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          fontWeight: 600,
          height: "38px",
          width: "88px",
        }}
      >
        Log in
      </Button>
    </Link>
  );
};
