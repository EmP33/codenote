import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NoteElement from "../../../../elements/NoteElement/NoteElement";
import { Skeleton } from "@mui/material";
import AddNoteButton from "./AddNoteButton/AddNoteButton";
import { useAppSelector } from "../../../../../lib/hooks";

const NotesSection = styled.div`
  grid-column: 1/-1;
`;

const Notes: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useAppSelector((state) => state.user.userData);
  const [notesType, setNotesType] = useState("newest");
  const [hoverOnNotes, setHoverOnNotes] = useState(true);
  //@ts-ignore
  const notes = [...userData.notes];

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
          flexDirection: "flex-start",
          columnGap: hoverOnNotes ? 2 : 1,
          overflowX: "auto",
          maxWidth: { xs: "93vw", md: "100vw" },
          transition: "all .2s ease-in",
          p: "0 8px 0 8px",

          "&:hover": {
            background: "var(--color-tertiary-light)",
          },
        }}
        onClick={() => {
          setHoverOnNotes((prevState) => !prevState);
        }}
      >
        {userData.notes && location.pathname.includes("notes") ? (
          <AddNoteButton hoverOnNotes={hoverOnNotes} />
        ) : userData.notes && userData.notes.length === 0 ? (
          <AddNoteButton hoverOnNotes={hoverOnNotes} />
        ) : (
          ""
        )}

        {userData.notes &&
          (notesType === "newest"
            ? notes
                .sort((a, b) => b.date - a.date)
                .map((note) => (
                  <NoteElement
                    hoverOnNotes={hoverOnNotes}
                    key={note.id}
                    id={note.id}
                    title={
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
                    date={`${new Date(note.date).getDate()}/${
                      new Date(note.date).getMonth() + 1
                    }/${new Date(note.date).getFullYear()}`}
                    content={
                      note.blocks
                        ? note.blocks.find(
                            (block: { data: {}; id: string; type: string }) =>
                              block.type === "paragraph"
                          )
                          ? note.blocks.find(
                              (block: { data: {}; id: string; type: string }) =>
                                block.type === "paragraph"
                            ).data.text
                          : "No description"
                        : "No description"
                    }
                  />
                ))
            : userData.notes?.map((note) => (
                <NoteElement
                  hoverOnNotes={hoverOnNotes}
                  key={note.id}
                  id={note.id}
                  title={
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
                  date={`${new Date(note.date).getDate()}/${
                    new Date(note.date).getMonth() + 1
                  }/${new Date(note.date).getFullYear()}`}
                  content={
                    note.blocks
                      ? note.blocks.find(
                          (block: { data: {}; id: string; type: string }) =>
                            block.type === "paragraph"
                        )
                        ? note.blocks.find(
                            (block: { data: {}; id: string; type: string }) =>
                              block.type === "paragraph"
                          ).data.text
                        : "No description"
                      : "No description"
                  }
                />
              )))}
        {!userData.notes && (
          <>
            <Skeleton
              variant="rectangular"
              width={350}
              height={250}
              sx={{
                margin: "2rem 0",
                background: "var(--color-tertiary-light)",
                flexShrink: 0,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={350}
              height={250}
              sx={{
                margin: "2rem 0",
                background: "var(--color-tertiary-light)",
                flexShrink: 0,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={350}
              height={250}
              sx={{
                margin: "2rem 0",
                background: "var(--color-tertiary-light)",
                flexShrink: 0,
              }}
            />
          </>
        )}
      </Box>
    </NotesSection>
  );
};

export default Notes;
