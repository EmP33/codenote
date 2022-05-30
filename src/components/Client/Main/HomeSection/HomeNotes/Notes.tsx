import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NoteElement from "../../../../elements/NoteElement/NoteElement";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "../../../../../lib/hooks";

const NotesSection = styled.div`
  grid-column: 1/-1;
`;

const Notes: React.FC = () => {
  const location = useLocation();
  const userData = useAppSelector((state) => state.user.userData);
  console.log(userData);
  if (userData.notes?.length) {
    console.log(
      userData.notes[0].blocks.find(
        (block: { data: {}; id: string; type: string }) =>
          block.type === "header"
      ).data.text
    );
  }

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
            disabled={notesType === "all"}
            onClick={setNotesType.bind(null, "all")}
          >
            All
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
        {location.pathname.includes("notes") && (
          <Button
            sx={{
              height: 250,
              width: 350,
              margin: "2rem auto",
              background: "var(--color-tertiary-light)",
              color: "#fff",
              position: "relative",
              zIndex: 1,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <AddIcon sx={{ fontSize: 40 }} />
          </Button>
        )}

        {userData.notes &&
          userData.notes?.map((note) => (
            <NoteElement
              key={note.id}
              title={
                note.blocks.find(
                  (block: { data: {}; id: string; type: string }) =>
                    block.type === "header"
                ).data.text
              }
              date={`${new Date(note.date).getDate()}/${
                new Date(note.date).getMonth() + 1
              }/${new Date(note.date).getFullYear()}`}
              content={
                note.blocks.find(
                  (block: { data: {}; id: string; type: string }) =>
                    block.type === "paragraph"
                ).data.text
              }
            />
          ))}

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
