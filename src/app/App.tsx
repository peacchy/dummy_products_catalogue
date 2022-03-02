import React from "react";
import { styled } from "@mui/material/styles";
import { AppRoutes } from "routing/AppRoutes";
import { TopNav } from "./topnav/TopNav";
import { TopNavNew } from "./topnav/TopNavNew";
import { ProductCard } from "./product/ProductCard";

const TESTDIV = styled("div")(({ theme }) => ({
  backgroundColor: "#F2F2F2",
  height: "100px",
}));

export const App = () => {
  return (
    <>
      {/* <TopNav /> */}
      {/* <div>TEST</div> */}
      <TopNavNew />
      <TESTDIV />
      {/* <Product
        description="Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat."
        image="https://picsum.photos/640/480?random=4946"
        name="Awesome Steel Fish"
        rating={3}
      /> */}
      <AppRoutes />
    </>
  );
};
