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

    //@ts-ignore
    const theme = JSON.parse(localStorage.getItem("CNTheme")) || [];

    // Set color theme
    const root = document.querySelector(":root");
    // @ts-ignore
    root.style.setProperty(
      "--color-secondary",
      theme?.tertiary ? theme.tertiary : "#947ec3"
    ); /*Block elements*/
    // @ts-ignore
    root.style.setProperty(
      "--color-secondary-dark",
      theme?.secondary ? theme.secondary : "#76659c"
    );
    // @ts-ignore
    root.style.setProperty(
      "--color-tertiary-dark",
      theme?.primary ? theme.primary : "#926e9a"
    ); /*Background*/
    //@ts-ignore
    root.style.setProperty(
      "--color-tertiary-light",
      theme?.base ? theme.base : "#daa4e6"
    ); /*Background*/
  }, [dispatch]);

  const signOutCurrentUserHandler = () => {
    navigate("/");
    localStorage.removeItem("CNTheme"); // Set color theme
    const root = document.querySelector(":root");
    // @ts-ignore
    root.style.setProperty("--color-secondary", "#947ec3"); /*Block elements*/
    // @ts-ignore
    root.style.setProperty("--color-secondary-dark", "#76659c");
    // @ts-ignore
    root.style.setProperty("--color-tertiary-dark", "#926e9a"); /*Background*/
    //@ts-ignore
    root.style.setProperty("--color-tertiary-light", "#daa4e6"); /*Background*/
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
