import React, { useEffect } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import Sidebar from "../components/Client/Sidebar/Sidebar";
import Main from "../components/Client/Main/Main";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useAppSelector } from "../lib/hooks";

const ClientPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  const signOutCurrentUserHandler = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        marginTop: { xs: 0, sm: 2 },
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: 0, sm: 2 },
      }}
    >
      <Sidebar user={user} onSignOut={signOutCurrentUserHandler} />
      <Main />
    </Container>
  );
};

export default ClientPage;
