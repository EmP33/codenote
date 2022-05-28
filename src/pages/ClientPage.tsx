import React, { useEffect } from "react";

import styled from "styled-components";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import Sidebar from "../components/Client/Sidebar/Sidebar";
import Main from "../components/Client/Main/Main";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useAppSelector } from "../lib/hooks";

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #5e5bc6;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%233e3d84' fill-opacity='0.2'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

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
    <ContentWrapper>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: 0, md: 2 },
        }}
      >
        <Sidebar user={user} onSignOut={signOutCurrentUserHandler} />
        <Main />
      </Container>
    </ContentWrapper>
  );
};

export default ClientPage;
