import React from "react";
import { Button, Stack, styled, Typography } from "@mui/material";
import { generatePaginationValues } from "./generatePaginationValues";

interface PageButtonProps {
  isCurrent: boolean;
}

const PageButton = styled(Button)<PageButtonProps>(({ isCurrent }) => ({
  color: isCurrent ? "red" : "#1A1B1D",
  minWidth: "10px",
  "&.MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },
}));

const HiddenPages = styled(Typography)(({ theme }) => ({
  padding: "0px 16px",
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#1A1B1D",
  "&.MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },
}));

interface PaginationCatalogueProps {
  totalPages: number;
  value: number;
  onChange: (value: number) => void;
}

export const PaginationCatalogue: React.VFC<PaginationCatalogueProps> = ({
  totalPages,
  value,
  onChange,
}) => {
  const handleChange = (value: number) => {
    onChange(value);
  };

  const handleFirst = () => {
    onChange(1);
  };

  const handleLast = () => {
    onChange(totalPages);
  };

  const numbers = generatePaginationValues(totalPages, value);

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Stack>
        <NavigationButton
          disableRipple
          onClick={handleFirst}
          disabled={value === 1}
        >
          <Typography>First</Typography>
        </NavigationButton>
      </Stack>
      <Stack direction="row" alignItems="center">
        {numbers.map((item) =>
          item === "..." ? (
            <HiddenPages key={item}>{item}</HiddenPages>
          ) : (
            <PageButton
              key={item}
              disableRipple
              isCurrent={item === value}
              onClick={() => handleChange(item)}
            >
              <Typography>{item}</Typography>
            </PageButton>
          )
        )}
      </Stack>
      <Stack>
        <NavigationButton
          disableRipple
          onClick={handleLast}
          disabled={value === totalPages}
        >
          <Typography>Last</Typography>
        </NavigationButton>
      </Stack>
    </Stack>
  );
};
