import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import Sidebar from "../components/Client/Sidebar/Sidebar";
import Main from "../components/Client/Main/Main";
import { Container } from "@mui/material";
import { useAppSelector } from "../lib/hooks";

import { useDispatch } from "react-redux";
import { guestActions } from "../store/guest-slice";

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-tertiary-dark);
`;

const GuestPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    /* Fetching the user from the database and setting the user in the redux store. If cannot fetch User create new User */
    //@ts-ignore
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    //@ts-ignore
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(guestActions.setNotes(notes));
    dispatch(guestActions.setTasks(tasks));
  }, [dispatch]);

  const signOutCurrentUserHandler = () => {
    navigate("/");
  };

  return (
    <ContentWrapper>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: 0, md: 2 },
          height: "auto",
        }}
      >
        <Sidebar user={user} onSignOut={signOutCurrentUserHandler} />
        <Main />
      </Container>
    </ContentWrapper>
  );
};

export default GuestPage;
