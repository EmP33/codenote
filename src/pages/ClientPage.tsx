import React from "react";

import Sidebar from "../components/Client/Sidebar/Sidebar";
import Main from "../components/Client/Main/Main";
import { Container } from "@mui/material";

const ClientPage: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", marginTop: 2 }}>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default ClientPage;
