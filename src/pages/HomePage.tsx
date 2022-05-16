import React from "react";
import Navbar from "../components/Home/Navbar/Navbar";
import HeadingSection from "../components/Home/HeadingSection/HeadingSection";
import NotesSection from "../components/Home/NotesSection/NotesSection";
import TasksSection from "../components/Home/TasksSection/TasksSection";
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
