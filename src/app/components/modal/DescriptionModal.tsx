import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import React, { useState, VFC } from "react";

const ModalWindow = styled(Modal)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Content = styled(Card)(({ theme }) => ({
  width: "600px",
  height: "530px",
  borderRadius: 8,
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
}));

const Information = styled(CardContent)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const Header = styled(Typography)(({ theme }) => ({
  // fontSize: 24,
}));

const Description = styled(Typography)(({ theme }) => ({
  // fontSize: 18,
  color: "#9194A5",
}));

interface DescriptionModalProps {
  description: string;
  image: string;
  name: string;
}

export const DescriptionModal: VFC<DescriptionModalProps> = ({
  description,
  image,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <ModalWindow
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
    </div>
  );
};
