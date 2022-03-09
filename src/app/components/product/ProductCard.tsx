import React, { useState } from "react";
import { VFC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Card, Rating, Stack, Typography } from "@mui/material";
import { ProductImage } from "./ProductImage";
import { DescriptionModal } from "../modal/DescriptionModal";

const ActionButton = styled(Button)({
  width: "100%",
  backgroundColor: "#4460F7",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#2140E8",
  },
});

const DisabledButton = styled(Button)({
  width: "100%",
  textTransform: "none",
  "&:disabled": {
    color: "white",
    backgroundColor: "#9194A5",
  },
});

const Title = styled(Typography)({
  fontSize: 16,
  fontWeight: 600,
  color: "#1A1B1D",
});

const Description = styled(Typography)({
  fontSize: 12,
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

  return (
    <Box>
      <Card elevation={0}>
        <ProductImage image={image} promo={promo} height={100} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding={3}
          height={150}
        >
          <Stack>
            <Title gutterBottom>{name}</Title>
            <Description variant="body2">{description}</Description>
          </Stack>
          <Stack spacing="18px">
            <RatingStars name="read-only" value={rating} readOnly />
            {active ? (
              <ActionButton
                disableElevation
                onClick={open}
                variant="contained"
                data-testid="show-details-button"
              >
                Show details
              </ActionButton>
            ) : (
              <DisabledButton
                disableElevation
                disabled={true}
                variant="contained"
              >
                Unavailable
              </DisabledButton>
            )}
          </Stack>
        </Box>
      </Card>
      <DescriptionModal
        name={name}
        description={description}
        image={image}
        isOpen={isOpen}
        onClose={close}
      />
    </Box>
  );
};
