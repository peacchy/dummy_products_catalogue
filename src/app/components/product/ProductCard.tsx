import React from "react";
import { VFC } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const ActionButton = styled(Button)({
  width: "100%",
  backgroundColor: "#4460F7",
  textTransform: "none",
});

const Title = styled(Typography)({
  fontSize: 18,
  fontWeight: 600,
  color: "#1A1B1D",
});

const Description = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  color: "#9194A5",
});

const RatingStars = styled(Rating)({
  fontSize: 15,
  "& .MuiRating-icon": {
    margin: "0 4px",
  },
  "& .MuiRating-iconFilled": {
    color: "#F9A52B",
  },
});

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

export interface ProductCardProps {
  description: string;
  image: string;
  name: string;
  rating: number;
}

export const ProductCard: VFC<ProductCardProps> = ({
  description,
  image,
  name,
  rating,
}) => {
  const cardHeight = 400;
  const mediaHeight = 170;
  const contentPaddingTop = 16;
  const contentPaddingBottom = 24;
  const contentHeight =
    cardHeight - (mediaHeight + (contentPaddingBottom + contentPaddingTop));

  return (
    <Card sx={{ width: 288, height: cardHeight, position: "relative" }}>
      <PromoFlag>Promo</PromoFlag>
      <CardMedia component="img" height={mediaHeight} image={image} />
      <Stack
        height={`${contentHeight}px`}
        justifyContent="space-between"
        padding={`${contentPaddingTop}px 16px ${contentPaddingBottom}px`}
      >
        <Stack>
          <Title gutterBottom>{name}</Title>
          <Description variant="body2">{description}</Description>
        </Stack>
        <Stack spacing="18px">
          <RatingStars name="read-only" value={rating} readOnly />
          <ActionButton variant="contained">Show details</ActionButton>
        </Stack>
      </Stack>
    </Card>
  );
};
