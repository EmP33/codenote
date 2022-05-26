import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface NoteElementProps {
  title: string;
  date: string;
  content: string;
}

const NoteElement: React.FC<NoteElementProps> = ({ title, date, content }) => {
  return (
    <Card
      sx={{
        height: 250,
        width: 350,
        margin: "2rem auto",
        background: "var(--color-tertiary-light)",
        color: "#fff",
        border: "1px solid #fff",
        position: "relative",
        zIndex: 1,
        cursor: "pointer",
        flexShrink: 0,

        "@media only screen and (max-width: 400px)": {
          width: "auto",
          maxWidth: 280,
        },

        "&:before": {
          content: "''",
          width: "100%",
          height: "70%",
          background: "var(--color-tertiary-dark)",
          position: "absolute",
          borderRadius: "0 0 50% 50%",
          top: 0,
          left: 0,
          zIndex: -1,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", zIndex: 5 }}
        >
          <Typography
            id="title"
            variant="h5"
            sx={{ fontSize: 18, marginBottom: 3 }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            id="date"
            variant="h6"
            sx={{
              fontSize: 16,
              color: "var(--color-base)",
            }}
          >
            {date}
          </Typography>
        </Box>
        <Typography id="content" sx={{ fontSize: 14, width: "75%" }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteElement;
