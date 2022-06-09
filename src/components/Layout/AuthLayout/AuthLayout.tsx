import React, { useEffect } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import { motion } from "framer-motion";
import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAppSelector } from "../../../lib/hooks";
// @ts-ignore
import logo from "../../../assets/logo-dark.png";

const authVariants = {
  hidden: { x: "100vw" },
  visible: { x: 0 },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

type Props = {
  children: JSX.Element;
};

const SocialMediaLoginButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0.75rem auto 0;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border: none;
  background: var(--color-tertiary-dark);
  color: #fff;
  border-radius: 3px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    background: var(--color-tertiary);
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  }

  & svg {
    margin-right: 0.5rem;
  }
`;
const HorizontalText = styled.div`
  font-size: 20px;
  margin: 0.5rem 0 0.5rem 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:before {
    content: "";
    width: 45%;
    height: 1px;
    background: #333;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:after {
    content: "";
    width: 45%;
    height: 1px;
    background: #333;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-tertiary-dark);
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23b689c0' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const AuthLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      navigate("/client");
    }
  }, [user, navigate]);

  const signInGoogleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/client");
      })
      .catch((error) => {});
  };

  return (
    <AuthWrapper>
      <Card
        component={motion.div}
        variants={authVariants}
        exit="exit"
        initial="hidden"
        animate="visible"
        sx={{
          width: { xs: "100%", sm: 500 },
          height: { xs: "100vh", sm: "auto" },
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{ width: { xs: "100%", sm: "75%" }, margin: "0 auto" }}
        >
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <SocialMediaLoginButton onClick={signInGoogleHandler}>
            <GoogleIcon /> Continue with Google
          </SocialMediaLoginButton>

          <HorizontalText>or</HorizontalText>
          <Box sx={{ marginTop: 1 }}>{children}</Box>
          <Typography sx={{ color: "#737373", margin: ".5rem 0 .5rem 0" }}>
            {location.pathname === "/register"
              ? "Already have an account?"
              : "Don't have an account?"}
          </Typography>
          <Link
            to={location.pathname === "/register" ? "/login" : "/register"}
            style={{ textDecoration: "none" }}
          >
            <Button sx={{ color: "var(--color-tertiary-dark)" }} variant="text">
              {location.pathname === "/register"
                ? "Sign In"
                : "Create an account"}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </AuthWrapper>
  );
};

export default AuthLayout;
