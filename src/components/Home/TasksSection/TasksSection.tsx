import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import ContentPoint from "../ContentPoint/ContentPoint";
import Tasks from "./Tasks/Tasks";

const TasksWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0 2rem 0;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 5rem;
    background: linear-gradient(
      180deg,
      rgba(78, 76, 165, 1) 50%,
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
    <TasksWrapper>
      <Container maxWidth="xl" sx={{ padding: { xs: 0, md: "0 24px 0 24px" } }}>
        <ContentPoint index="02" heading="Organize time" />
        <Grid container sx={{ marginTop: 5 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontFamily: "var(--font-heading)",
              }}
            >
              Organize your time with perfect Tasks List
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tasks />
          </Grid>
        </Grid>
      </Container>
    </TasksWrapper>
  );
};

export default TasksSection;
