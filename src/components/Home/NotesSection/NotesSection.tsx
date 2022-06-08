import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import styled from "styled-components";
import ContentPoint from "../ContentPoint/ContentPoint";
//@ts-ignore
import notes from "../../../assets/nono.png";

const NotesWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0 2rem 0;
  position: relative;

  &::before {
    content: "NOTES";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 170px;
    font-weight: bold;
    color: rgba(51, 51, 51, 0.05);
    background: rgba(51, 51, 51, 0.05);

    @media screen and (max-width: 1200px) {
      font-size: 120px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 80px;
    }
    @media screen and (max-width: 800px) {
      content: "";
    }
  }
`;

const NotesSection: React.FC = () => {
  return (
    <NotesWrapper>
      <Container maxWidth="xl" sx={{ padding: { xs: 0, md: "0 24px 0 24px" } }}>
        <ContentPoint
          index="01"
          heading="Improve
  efficiency"
        />
        <Grid container sx={{ marginTop: 5, height: "100vh" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontFamily: "var(--font-heading)",
                marginTop: { xs: 10, lg: 0 },
                color: "var(--color-tertiary-dark)",
              }}
            >
              Improve your efficiency with our wonderful notes!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontFamily: "var(--font-heading)",
                marginTop: 1,
                color: "var(--color-tertiary-dark)",
              }}
            >
              Codenote lets you capture your ideas and thoughts, to be viewed at
              a later time.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 700,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={notes}
                alt="nono"
                width="90%"
                style={{ maxWidth: "900px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </NotesWrapper>
  );
};

export default NotesSection;
