import React from "react";
import { VFC } from "react";
import { styled } from "@mui/material/styles";
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
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
  //   fontFamily: "Nunito",
  color: "#1A1B1D",
});

const Description = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  color: "#9194A5",
});

const RatingStars = styled(Rating)({
  fontSize: 14,
  "& .MuiRating-icon": {
    margin: "5px",
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
}

export const ProductCard: VFC<ProductCardProps> = ({
  description,
  image,
  name,
  rating,
}) => {
  return (
    <Card sx={{ width: 288, height: 400 }}>
      <Badge
        color="secondary"
        badgeContent={"promo"}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <CardMedia component="img" height="170" image={image} />
      </Badge>
      <CardContent>
        <Title gutterBottom>{name}</Title>
        <Description variant="body2">{description}</Description>
      </CardContent>
      <CardContent>
        <RatingStars name="read-only" value={rating} readOnly />
      </CardContent>
      <CardActions>
        <ActionButton variant="contained">Show details</ActionButton>
      </CardActions>
    </Card>
  );
};
