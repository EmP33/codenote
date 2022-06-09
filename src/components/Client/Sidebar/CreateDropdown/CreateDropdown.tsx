import React from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import NoteIcon from "@mui/icons-material/Note";

interface ICreateDropdown {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
}

const CreateDropdown: React.FC<ICreateDropdown> = ({
  open,
  anchorEl,
  handleClose,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <List sx={{ width: 250 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              location.pathname.includes("/client")
                ? navigate("/client/notes/new")
                : navigate("/guest/notes/new");
            }}
          >
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Create Note" />
          </ListItemButton>
        </ListItem>
      </List>
    </Popover>
  );
};

export default React.memo(CreateDropdown);
