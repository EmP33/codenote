import React from "react";
import { Container, Typography } from "@mui/material";
import styled from "styled-components";
import ContentPoint from "../ContentPoint/ContentPoint";

const NotesWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 5rem 0 0 0;
  background: var(--color-secondary);
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 5rem;
    background: linear-gradient(
      0deg,
      rgba(19, 15, 50, 1) 50%,
      rgba(62, 61, 132, 1) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const NotesSection: React.FC = () => {
  return (
    <NotesWrapper>
      <Container maxWidth="xl">
        <ContentPoint
          index="1"
          heading="Improve
        efficiency"
        />
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-heading)",
            letterSpacing: 1,
          }}
        >
          Improve your efficiency with our wonderful notes!
        </Typography>
      </Container>
    </NotesWrapper>
  );
};

export default NotesSection;
