import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
//@ts-ignore
import mockup from "../../../assets/mockup.png";

const HeadingWrapper = styled.div`
  display: grid;
  justify-items: flex-start;
  grid-row-gap: 1rem;
`;
const RegisterButton = styled.button`
  position: relative;
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  background: transparent;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  border: 2px solid var(--color-tertiary-dark);
  transition: all 0.3s ease;
  z-index: 1;

  &:hover:after {
    top: 0;
    left: 0;
  }

  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s;
    background-color: var(--color-tertiary-dark);
    @media screen {
    }
  }
`;

const HeadingSection: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={0}
        alignItems="center"
        sx={{
          height: "87.5vh",
          width: "100%",
          mt: { xs: 2, lg: 0 },
        }}
      >
        <Grid item xs={12} lg={5}>
          <HeadingWrapper>
            <Typography
              variant="h1"
              sx={{
                color: "var(--color-tertiary-dark)",
                fontWeight: "bold",
                fontSize: { xs: 50, md: 100 },
              }}
            >
              CodeNote
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 14, md: 18 },
                color: "var(--color-tertiary-dark)",
              }}
            >
              Join us to increase your notes to a higher level. Lots of good
              features. Create your account and get started!
            </Typography>
            <Link to="/register">
              <RegisterButton>Create an Account</RegisterButton>
            </Link>
          </HeadingWrapper>
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: { xs: "60%", md: "70%", lg: "100%" },
          }}
        >
          <img
            src={mockup}
            alt="mockup"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeadingSection;
