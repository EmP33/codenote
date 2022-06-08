import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 5;
`;

interface ContentPointProps {
  index: string;
  heading: string;
}

const ContentPoint: React.FC<ContentPointProps> = ({ index, heading }) => {
  return (
    <ContentDiv>
      <Typography
        variant="h6"
        id="heading"
        sx={{
          borderTop: "5px solid var(--color-secondary-dark)",
          padding: { xs: "1rem .5rem 0 0", md: "1rem 0 0 0" },
          width: "300px",
          display: "flex",
          justifyContent: "flex-end",
          color: "var(--color-secondary)",
        }}
      >
        <span style={{ color: "var(--color-secondary-dark)", paddingRight: 3 }}>
          {index}
        </span>
        / {heading}
      </Typography>
    </ContentDiv>
  );
};

export default ContentPoint;
