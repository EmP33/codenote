import React from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";
import TaskIcon from "@mui/icons-material/Task";

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
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Create Note" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TaskIcon />
            </ListItemIcon>
            <ListItemText primary="Create Task" />
          </ListItemButton>
        </ListItem>
      </List>
    </Popover>
  );
};

export default CreateDropdown;
