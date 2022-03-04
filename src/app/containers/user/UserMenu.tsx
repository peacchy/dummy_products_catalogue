import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";

export const UserMenu: React.VFC = () => {
  const menuId = "primary-search-account-menu";

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </>
  );
};
