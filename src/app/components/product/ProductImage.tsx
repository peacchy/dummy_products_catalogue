import { CardMedia, styled, Typography } from "@mui/material";
import React from "react";

const PromoFlag = styled(Typography)({
  backgroundColor: "#F9A52B",
  color: "#FFFFFF",
  position: "absolute",
  textAlign: "center",
  width: 75,
  height: 24,
  top: 16,
  fontWeight: 500,
  fontSize: 14,
});

interface ProductImageProps {
  image: string;
  height: number;
  promo: boolean;
}

export const ProductImage: React.VFC<ProductImageProps> = ({
  image,
  height,
  promo,
}) => {
  return (
    <>
      {promo && <PromoFlag>Promo</PromoFlag>}
      <CardMedia component="img" height={height} image={image} />
    </>
  );
};
