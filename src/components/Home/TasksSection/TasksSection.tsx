import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import styled from "styled-components";
import ContentPoint from "../ContentPoint/ContentPoint";

//@ts-ignore
import tasks from "../../../assets/tasks.png";

const TasksWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0 2rem 0;
  position: relative;

  &::before {
    content: "TASKS";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 170px;
    font-weight: bold;
    color: rgba(51, 51, 51, 0.1);
    @media screen and (max-width: 1200px) {
      font-size: 120px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 80px;
    }
    @media screen and (max-width: 800px) {
      content: "";
    }
    background: rgba(51, 51, 51, 0.1);
  }
`;
const TasksSection: React.FC = () => {
  return (
    <TasksWrapper>
      <Container maxWidth="xl" sx={{ padding: { xs: 0, md: "0 24px 0 24px" } }}>
        <ContentPoint index="02" heading="Organize time" />
        <Grid container sx={{ marginTop: 5 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontFamily: "var(--font-heading)",
                color: "var(--color-tertiary-dark)",
              }}
            >
              Organize your time with perfect Tasks List
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontFamily: "var(--font-heading)",
                color: "var(--color-tertiary-dark)",
              }}
            >
              You can use Tasks to help you manage your day-to-day tasks and
              keep them organized.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: 400, margin: "0 auto" }}>
              <img src={tasks} alt="tasks" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TasksWrapper>
  );
};

export default TasksSection;
