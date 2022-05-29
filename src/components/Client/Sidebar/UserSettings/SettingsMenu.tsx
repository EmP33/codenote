import React from "react";

import {
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface ISettingsMenu {
  onChange: (tabName: string) => void;
}

const SettingsMenu: React.FC<ISettingsMenu> = ({ onChange }) => {
  return (
    <MenuList>
      <MenuItem onClick={onChange.bind(null, "preferences")}>
        <ListItemIcon>
          <SettingsInputComponentIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Preferences</ListItemText>
      </MenuItem>
      <MenuItem onClick={onChange.bind(null, "login")}>
        <ListItemIcon>
          <ShieldIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Login and security</ListItemText>
      </MenuItem>
      <MenuItem onClick={onChange.bind(null, "information")}>
        <ListItemIcon>
          <PersonOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Account information</ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default SettingsMenu;
