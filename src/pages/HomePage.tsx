import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeadingSection from "../components/HeadingSection/HeadingSection";
import NotesSection from "../components/NotesSection/NotesSection";
import TasksSection from "../components/TasksSection/TasksSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeadingSection />
      <NotesSection />
      <TasksSection />
    </>
  );
};

export default HomePage;
