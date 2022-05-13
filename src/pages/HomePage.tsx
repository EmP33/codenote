import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeadingSection from "../components/HeadingSection/HeadingSection";
import NotesSection from "../components/NotesSection/NotesSection";
import TasksSection from "../components/TasksSection/TasksSection";
import Footer from "../components/Layout/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeadingSection />
      <NotesSection />
      <TasksSection />
      <Footer />
    </>
  );
};

export default HomePage;
