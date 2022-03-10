import CloseIcon from "@mui/icons-material/Close";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import React, { useState, VFC } from "react";

const ModalWindow = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Content = styled(Card)({
  width: "600px",
  height: "530px",
  borderRadius: 8,
});

const CloseButton = styled(IconButton)({
  position: "absolute",
});

const Information = styled(CardContent)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const Description = styled(Typography)({
  color: "#9194A5",
});

interface DescriptionModalProps {
  description: string;
  image: string;
  name: string;
  isOpen: boolean;
  onClose: () => void;
}

export const DescriptionModal: VFC<DescriptionModalProps> = ({
  description,
  image,
  name,
  isOpen,
  onClose,
}) => {
  return (
    <ModalWindow
      open={isOpen}
      onClose={onClose}
      data-testid="product-details-modal"
    >
      <Content>
        <CloseButton>
          <IconButton size="small">
            <CloseIcon />
          </IconButton>
        </CloseButton>
        <CardMedia component="img" height="354" image={image} />
        <Information>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Description variant="body2">{description}</Description>
        </Information>
      </Content>
    </ModalWindow>
  );
};
