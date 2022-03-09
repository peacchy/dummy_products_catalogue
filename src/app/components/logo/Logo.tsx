import * as React from "react";
import { styled, Typography } from "@mui/material";

const CompanyLogo = styled(Typography)(({ theme }) => ({
  fontSize: 24,
}));

export const Logo: React.FC = ({ children }) => {
  return <CompanyLogo noWrap>{children}</CompanyLogo>;
};
