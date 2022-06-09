import React from "react";
import {
  Avatar,
  Popover,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

interface IUserDropdown {
  handleClose: () => void;
  anchorEl: HTMLButtonElement | null;
  user: any;
  onSignOut: () => void;
  open: boolean;
}

const UserDropdown: React.FC<IUserDropdown> = ({
  handleClose,
  anchorEl,
  user,
  onSignOut,
  open,
}) => {
  const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <List
        sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Account
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              alt={user ? user?.displayName || user?.email : "Guest"}
              sx={{
                background: "var(--color-tertiary-light)",
                border: "1px solid #fff",
              }}
            >
              {user
                ? user.displayName
                  ? user?.displayName[0]
                  : user?.email[0]
                : "G"}
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary={user ? user?.displayName || user?.email : "Guest"}
          />
        </ListItemButton>
        <ListItemButton onClick={onSignOut}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </List>
    </Popover>
  );
};

export default React.memo(UserDropdown);
