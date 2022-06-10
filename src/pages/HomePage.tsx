import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar/Navbar";
import HeadingSection from "../components/Home/HeadingSection/HeadingSection";
import NotesSection from "../components/Home/NotesSection/NotesSection";
import TasksSection from "../components/Home/TasksSection/TasksSection";
import Footer from "../components/Layout/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
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
