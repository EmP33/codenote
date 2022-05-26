import React from "react";
import { Container } from "@mui/material";

import HomeSection from "./HomeSection/HomeSection";

const Main = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        borderRadius: 1,
        background: "var(--color-tertiary)",
        p: 3,
        border: "1px solid var(--color-tertiary-dark)",
        padding: 1,
      }}
    >
      <HomeSection />
    </Container>
  );
};

export default Main;
