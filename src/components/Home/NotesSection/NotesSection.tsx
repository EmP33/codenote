import React, { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContentPoint from "../ContentPoint/ContentPoint";
import NoteElement from "../../elements/NoteElement/NoteElement";

const NotesWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0 0 0;
  background: var(--color-tertiary);
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 5rem;
    background: linear-gradient(
      0deg,
      rgba(78, 76, 165, 1) 50%,
      rgba(62, 61, 132, 1) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const NotesSection: React.FC = () => {
  const [notesActions, setNotesActions] = useState(false);
  const [notesHeaderActions, setNotesHeaderActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNotesHeaderActions(true);
      }
      if (window.scrollY > 400) {
        setNotesActions(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <NotesWrapper>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <motion.span
          animate={{ opacity: notesHeaderActions ? 1 : 0 }}
          initial={{ opacity: 0 }}
        >
          <ContentPoint
            index="01"
            heading="Improve
        efficiency"
          />
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "var(--font-heading)",
              marginTop: { xs: 10, lg: 0 },
            }}
          >
            Improve your efficiency with our wonderful notes!
          </Typography>
        </motion.span>

        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 0, sm: 2, md: 5 }}
          component={motion.div}
          sx={{
            justifyContent: "center",
            marginTop: 5,
            maxWidth: 1200,
            alignSelf: "center",
          }}
          animate={{
            opacity: notesActions ? 1 : 0,
            y: notesActions ? 0 : "100vh",
            transition: {
              type: "tween",
            },
          }}
          initial={{ opacity: 0, y: "100vh" }}
        >
          <Grid item>
            <NoteElement
              hoverOnNotes={true}
              title="Flight Details"
              date="5/3/22"
              content="Get to the airport by 7am before takeoff"
              id="n1"
            />
          </Grid>
          <Grid item>
            <NoteElement
              hoverOnNotes={true}
              title="Business Strategy"
              date="11/2/22"
              content="Goal Corner market for green homes in Emerald Heights area by specializing in modern"
              id="n2"
            />
          </Grid>
          <Grid item>
            <NoteElement
              hoverOnNotes={true}
              title="Today's Ideas"
              date="5/11/21"
              content="This is what I need to do today. First of all I have to go to barber to make my haircut, second go to work"
              id="n3"
            />
          </Grid>
          <Grid item>
            <NoteElement
              hoverOnNotes={true}
              title="Client Preferences"
              date="22/5/22"
              content="Regrouping to let James know which listings seem like the best it and..."
              id="n4"
            />
          </Grid>
          <Grid item>
            <NoteElement
              hoverOnNotes={true}
              title="Party Preparations"
              date="24/1/21"
              content="What I need to do to make party. First buy some groceries, second call a dj"
              id="n5"
            />
          </Grid>
        </Grid>
      </Container>
    </NotesWrapper>
  );
};

export default NotesSection;
