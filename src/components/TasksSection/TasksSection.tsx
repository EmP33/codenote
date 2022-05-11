import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import ContentPoint from "../ContentPoint/ContentPoint";

const NotesWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 5rem 0 0 0;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 5rem;
    background: linear-gradient(
      180deg,
      rgba(19, 15, 50, 1) 50%,
      rgba(62, 61, 132, 1) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
const TasksSection: React.FC = () => {
  return (
    <NotesWrapper>
      <Container maxWidth="xl">
        <ContentPoint index="02" heading="Organize time" />
        <Grid container>
          <Grid item>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontFamily: "var(--font-heading)" }}
            >
              Organize your time with perfect Tasks List
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </NotesWrapper>
  );
};

export default TasksSection;
