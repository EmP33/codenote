import * as React from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useAppSelector } from "../../../../../lib/hooks";

interface INotePopover {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  setPinnedNote: (noteTitle: string, note: {}) => void;
}

const NotePopover: React.FC<INotePopover> = ({
  open,
  anchorEl,
  handleClose,
  setPinnedNote,
}) => {
  const id = open ? "simple-popover" : undefined;
  const notes = useAppSelector((state) => state.user.userData.notes);

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
      <List>
        {notes?.map((note) => (
          <ListItem disablePadding key={note.id}>
            <ListItemButton
              onClick={() => {
                setPinnedNote(
                  note.blocks
                    ? note?.blocks.find(
                        (block: { data: {}; id: string; type: string }) =>
                          block.type === "header"
                      )
                      ? note.blocks.find(
                          (block: { data: {}; id: string; type: string }) =>
                            block.type === "header"
                        ).data.text
                      : "No header"
                    : "No header",
                  note
                );
                handleClose();
              }}
            >
              <ListItemText
                primary={
                  note.blocks
                    ? note?.blocks.find(
                        (block: { data: {}; id: string; type: string }) =>
                          block.type === "header"
                      )
                      ? note.blocks.find(
                          (block: { data: {}; id: string; type: string }) =>
                            block.type === "header"
                        ).data.text
                      : "No header"
                    : "No header"
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Popover>
  );
};

export default NotePopover;
