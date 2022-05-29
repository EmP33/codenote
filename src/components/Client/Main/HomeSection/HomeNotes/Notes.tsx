import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";
import NoteElement from "../../../../elements/NoteElement/NoteElement";

const NotesSection = styled.div`
  grid-column: 1/-1;
`;

const Notes: React.FC = () => {
  const [notesType, setNotesType] = useState("newest");
  return (
    <NotesSection>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 22 }}>Notes</Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            color="inherit"
            size="small"
            disabled={notesType === "newest"}
            onClick={setNotesType.bind(null, "newest")}
          >
            Newest
          </Button>
          <Button
            color="inherit"
            size="small"
            disabled={notesType === "popular"}
            onClick={setNotesType.bind(null, "popular")}
          >
            Most Popular
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          columnGap: 4,
          overflowX: "auto",
          maxWidth: { xs: "93vw", md: "100vw" },
        }}
      >
        <NoteElement
          title="Client Preferences"
          date="22/5/22"
          content="Regrouping to let James know which listings seem like the best it and..."
        />
        <NoteElement
          title="Client Preferences"
          date="22/5/22"
          content="Regrouping to let James know which listings seem like the best it and..."
        />
        <NoteElement
          title="Client Preferences"
          date="22/5/22"
          content="Regrouping to let James know which listings seem like the best it and..."
        />
        <NoteElement
          title="Client Preferences"
          date="22/5/22"
          content="Regrouping to let James know which listings seem like the best it and..."
        />
        <NoteElement
          title="Client Preferences"
          date="22/5/22"
          content="Regrouping to let James know which listings seem like the best it and..."
        />
        <NoteElement
          title="Client Preferences"
          date="22/5/22"
          content="Regrouping to let James know which listings seem like the best it and..."
        />
      </Box>
    </NotesSection>
  );
};

export default Notes;
