import { AccountCircle } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { User } from "app/models/User";
import React from "react";

interface UserMenuProps {
  user: User;
  onLogout: () => void;
}

export const UserMenu: React.VFC<UserMenuProps> = ({ user, onLogout }) => {
  const menuId = "primary-search-account-menu";

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    onLogout();
    handleCloseMenu();
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        alt={user.username}
        src={user.avatar}
        onClick={handleProfileMenuOpen}
      />
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
        onClose={handleCloseMenu}
      >
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Menu>
    </>
  );
};
