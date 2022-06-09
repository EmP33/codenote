import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import HomeSection from "./HomeSection/HomeSection";
import TasksSection from "./TasksSection/TasksSection";
import NotesSection from "./NotesSection/NotesSection";

const Main = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        borderRadius: { xs: 0, md: 1 },
        background: "var(--color-secondary-dark)",
        p: 3,
        border: "1px solid var(--color-secondary-dark)",
        padding: 1,
      }}
    >
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/notes/:note" element={<NotesSection />} />
        <Route path="/tasks" element={<TasksSection />} />
      </Routes>
    </Container>
  );
};

export default React.memo(Main);
