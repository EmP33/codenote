import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeadingSection from "../components/HeadingSection/HeadingSection";
import NotesSection from "../components/NotesSection/NotesSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeadingSection />
      <NotesSection />
    </>
  );
};

export default HomePage;
