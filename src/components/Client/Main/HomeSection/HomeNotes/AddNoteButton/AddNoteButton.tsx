import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

interface IAddNoteButton {
  hoverOnNotes: boolean;
}

const AddNoteButton: React.FC<IAddNoteButton> = ({ hoverOnNotes }) => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        height: hoverOnNotes ? 250 : 100,
        width: hoverOnNotes ? 350 : 150,
        margin: "2rem 0",
        background: "var(--color-tertiary-light)",
        color: "#fff",
        position: "relative",
        zIndex: 1,
        cursor: "pointer",
        flexShrink: 0,
      }}
      onClick={() => {
        navigate("/client/notes/new");
      }}
    >
      <AddIcon sx={{ fontSize: hoverOnNotes ? 40 : 30 /*40*/ }} />
    </Button>
  );
};

export default AddNoteButton;
