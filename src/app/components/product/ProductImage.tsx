import { CardMedia, styled, Typography } from "@mui/material";
import React from "react";

const PromoFlag = styled(Typography)(({ theme }) => ({
  backgroundColor: "#F9A52B",
  color: "#FFFFFF",
  position: "absolute",
  textAlign: "center",
  width: "75px",
  height: "24px",
  top: theme.spacing(2),
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(14),
}));

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
    <div style={{ position: "relative" }}>
      {promo && <PromoFlag>Promo</PromoFlag>}
      <CardMedia component="img" height={height} image={image} />
    </div>
  );
};
