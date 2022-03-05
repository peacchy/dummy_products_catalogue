import React, { useState } from "react";
import { VFC } from "react";
import { styled } from "@mui/material/styles";
import { Button, Card, Rating, Stack, Typography } from "@mui/material";
import { ProductImage } from "./ProductImage";
import { DescriptionModal } from "../modal/DescriptionModal";

const ActionButton = styled(Button)({
  width: "100%",
  backgroundColor: "#4460F7",
  textTransform: "none",
});

const DisabledButton = styled(Button)({
  width: "100%",
  textTransform: "none",
  // color: "white",
  // backgroundColor: "#9194A5",

  // "& .Mui-disabled": {
  //   color: "white",
  //   backgroundColor: "#9194A5",
  // },
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

export interface ProductCardProps {
  description: string;
  image: string;
  name: string;
  rating: number;
  promo: boolean;
  active: boolean;
}

export const ProductCard: VFC<ProductCardProps> = ({
  description,
  image,
  name,
  rating,
  promo,
  active,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const cardHeight = 400;
  const mediaHeight = 170;
  const contentPaddingTop = 16;
  const contentPaddingBottom = 24;
  const contentHeight =
    cardHeight - (mediaHeight + (contentPaddingBottom + contentPaddingTop));

  return (
    <>
      <Card sx={{ width: 288, height: cardHeight, position: "relative" }}>
        <ProductImage image={image} promo={promo} height={mediaHeight} />
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
            {active ? (
              <ActionButton onClick={open} variant="contained">
                Show details
              </ActionButton>
            ) : (
              <DisabledButton disabled={true} variant="contained">
                Unavailable
              </DisabledButton>
            )}
          </Stack>
        </Stack>
      </Card>
      <DescriptionModal
        name={name}
        description={description}
        image={image}
        isOpen={isOpen}
        onClose={close}
      />
    </>
  );
};
