import React from "react";
import { Button, Stack, styled, Typography } from "@mui/material";
import { generatePaginationValues } from "../../helpers/generatePaginationValues";

const Pagination = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  justifyContent: "center",
}));

const PageButton = styled(Button)<PageButtonProps>(({ current }) => ({
  color: current,
  minWidth: "10px",
  "&.MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },
}));

const HiddenPages = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 1),
  },
}));

const NavigationButton = styled(Button)({
  textTransform: "none",
  minWidth: "10px",
  color: "#1A1B1D",
  "&.MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },
});

interface PageButtonProps {
  current: string;
}

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
    <Pagination direction="row" spacing={2} data-testid="catalogue-pagination">
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
              current={item === value ? "#4460F7" : "#1A1B1D"}
              onClick={() => handleChange(item)}
              data-testid={`pagination-page-${item}`}
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
    </Pagination>
  );
};
