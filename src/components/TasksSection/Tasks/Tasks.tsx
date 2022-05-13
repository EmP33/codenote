import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Task from "./Task/Task";
import { motion } from "framer-motion";

const Tasks: React.FC = () => {
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
        background: "var(--color-tertiary-light)",
        color: "#fff",
        maxWidth: 550,
        margin: { xs: "2rem auto", md: "0 auto" },
        textAlign: "center",
        padding: { xs: "2rem .5rem", md: "2rem 1rem" },
        cursor: "pointer",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 30 }}>
          TASKS
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Task title="Meet up with a client" date="Due Today, 2:00 PM" />
          <Task title="Write an application" date="Due Today, 9:00 AM" />
          <Task title="Conquer the world" date="Due Tomorrow, 10:00 AM" />
          <Task title="Build an app" date="Due July, 11" />
          <Task title="Eat icecream" date="Due October, 21" />
          <Task title="Go to the gym" date="Due December, 24" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tasks;
