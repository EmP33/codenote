import React from "react";

import { MenuList, MenuItem, ListItemText, ListItemIcon } from "@mui/material";

import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface ISettingsMenu {
  onChange: (tabName: string) => void;
  tab: string;
}

const SettingsMenu: React.FC<ISettingsMenu> = ({ onChange, tab }) => {
  return (
    <MenuList>
      <MenuItem
        onClick={onChange.bind(null, "preferences")}
        sx={{ background: tab === "preferences" ? "#f2f2f2" : "#ffff" }}
      >
        <ListItemIcon>
          <SettingsInputComponentIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Preferences</ListItemText>
      </MenuItem>
      <MenuItem
        onClick={onChange.bind(null, "login")}
        sx={{ background: tab === "login" ? "#f2f2f2" : "#ffff" }}
      >
        <ListItemIcon>
          <ShieldIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Login and security</ListItemText>
      </MenuItem>
      <MenuItem
        onClick={onChange.bind(null, "information")}
        sx={{ background: tab === "information" ? "#f2f2f2" : "#ffff" }}
      >
        <ListItemIcon>
          <PersonOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Account information</ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default SettingsMenu;
