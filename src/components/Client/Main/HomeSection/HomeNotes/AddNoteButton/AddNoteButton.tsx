import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

interface IAddNoteButton {
  notesClick: boolean;
}

const AddNoteButton: React.FC<IAddNoteButton> = ({ notesClick }) => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        height: notesClick ? 250 : 100,
        width: notesClick ? 350 : 150,
        margin: "2rem 0",
        background: "var(--color-tertiary)",
        color: "#fff",
        position: "relative",
        zIndex: 1,
        cursor: "pointer",
        flexShrink: 0,
        transition: "all .2s ease-in",

        "&:hover": {
          background: "var(--color-tertiary-light)",
        },
        "&:active": {
          background: "#fff",
          color: "#333",
        },
      }}
      onClick={() => {
        notesClick && navigate("/client/notes/new");
      }}
      disabled={!notesClick}
    >
      <AddIcon sx={{ fontSize: notesClick ? 40 : 30 /*40*/ }} />
    </Button>
  );
};

export default AddNoteButton;
