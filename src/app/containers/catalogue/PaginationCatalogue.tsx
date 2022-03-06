import React from "react";
import {
  Icon,
  Pagination,
  PaginationItem,
  styled,
  Typography,
} from "@mui/material";

import { ReactComponent as Last } from "../../../assets/Last.svg";

const Page = styled(PaginationItem)(({ theme }) => ({
  "& .Mui-selected": {
    color: "blue",
  },
}));

export const PaginationCatalogue = () => {
  return (
    <Pagination
      count={6}
      showFirstButton
      showLastButton
      hidePrevButton
      hideNextButton
      renderItem={(item) => (
        <PaginationItem
          components={{
            last: () => <Typography>Last</Typography>,
            first: () => <Typography>First</Typography>,
          }}
          {...item}
        />
      )}
    />
  );
};
