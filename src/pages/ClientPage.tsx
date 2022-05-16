import React, { useEffect } from "react";

import Sidebar from "../components/Client/Sidebar/Sidebar";
import Main from "../components/Client/Main/Main";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useAppSelector } from "../lib/hooks";

const ClientPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container maxWidth="xl" sx={{ display: "flex", marginTop: 2 }}>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default ClientPage;
