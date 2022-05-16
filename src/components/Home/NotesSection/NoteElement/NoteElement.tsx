import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface NoteElementProps {
  title: string;
  date: string;
  content: string;
}

const NoteElement: React.FC<NoteElementProps> = ({ title, date, content }) => {
  const [enableDragging, setEnableDragging] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width <= 600) {
        setEnableDragging(false);
      } else {
        setEnableDragging(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return (
    <Card
      component={motion.div}
      drag={enableDragging}
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      sx={{
        height: 250,
        width: 350,
        margin: "2rem auto",
        background: "var(--color-secondary-light)",
        color: "#fff",
        border: "2px solid var(--color-tertiary)",
        position: "relative",
        zIndex: 1,
        cursor: "pointer",

        "@media only screen and (max-width: 400px)": {
          width: "auto",
          maxWidth: 280,
        },

        "&:before": {
          content: "''",
          width: "100%",
          height: "70%",
          background: "var(--color-secondary)",
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
          <Typography sx={{ fontSize: 18, marginBottom: 3 }} gutterBottom>
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "var(--color-base)",
            }}
          >
            {date}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 14, width: "75%" }}>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteElement;
