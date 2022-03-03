import React from "react";
import { styled } from "@mui/material/styles";
import { AppRoutes } from "routing/AppRoutes";
import { ProductCard } from "./components/product/ProductCard";
import { TopNavNew } from "./containers/topnav/TopNavNew";

const TESTDIV = styled("div")(({ theme }) => ({
  backgroundColor: "#F2F2F2",
}));

export const App = () => {
  return (
    <>
      {/* <TopNav /> */}
      {/* <div>TEST</div> */}
      <TopNavNew />
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
