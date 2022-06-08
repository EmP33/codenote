import React, { useEffect } from "react";

import styled from "styled-components";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import Sidebar from "../components/Client/Sidebar/Sidebar";
import Main from "../components/Client/Main/Main";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useAppSelector } from "../lib/hooks";

import { useDispatch } from "react-redux";
import { createUser, fetchUser, userActions } from "../store/user-slice";

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-tertiary-dark);
`;

const ClientPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.user);
  const error = useAppSelector((state) => state.user.error);
  const { uid } = user;
  useEffect(() => {
    /* Fetching the user from the database and setting the user in the redux store. If cannot fetch User create new User */

    dispatch(fetchUser(uid));
    if (error) {
      dispatch(createUser(uid));
      dispatch(userActions.setError(false));
    }
  }, [dispatch, error, uid]);

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
          height: "auto",
        }}
      >
        <Sidebar user={user} onSignOut={signOutCurrentUserHandler} />
        <Main />
      </Container>
    </ContentWrapper>
  );
};

export default ClientPage;
