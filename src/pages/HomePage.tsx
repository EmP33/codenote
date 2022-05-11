import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg"></Container>
    </>
  );
};

export default HomePage;
