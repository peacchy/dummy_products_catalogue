import React from "react";
import {
  Button,
  Pagination,
  PaginationItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { generatePaginationNumbers } from "./generatePaginationNumbers";

const Page = styled(PaginationItem)(({ theme }) => ({
  "& .Mui-selected": {
    color: "blue",
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
  const handleChange = (event: any, value: number) => {
    onChange(value);
  };

  const handleFirst = () => {
    onChange(1);
  };

  const handleLast = () => {
    onChange(totalPages);
  };

  const numbers = generatePaginationNumbers(totalPages, value);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Stack>
          <Button onClick={handleFirst} disabled={value === 1}>
            <Typography>First</Typography>
          </Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          {numbers.map((item) =>
            item === "..." ? (
              <Typography>{item}</Typography>
            ) : (
              <Button onClick={() => handleChange(1, item)}>
                <Typography>{item}</Typography>
              </Button>
            )
          )}
        </Stack>
        <Stack>
          <Button onClick={handleLast} disabled={value === totalPages}>
            <Typography>Last</Typography>
          </Button>
        </Stack>
      </Stack>
      <Pagination
        page={value}
        onChange={handleChange}
        count={totalPages}
        showFirstButton
        showLastButton
        hidePrevButton
        hideNextButton
        boundaryCount={0}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            components={{
              first: () => <Typography>First</Typography>,
              last: () => <Typography>Last</Typography>,
            }}
          />
        )}
      />
    </>
  );
};
