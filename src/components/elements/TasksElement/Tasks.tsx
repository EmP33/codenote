import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Task from "./Task/Task";

const Tasks: React.FC = () => {
  return (
    <Card
      sx={{
        background: "var(--color-tertiary-light)",
        minWidth: { xs: "100%", sm: 450 },
        color: "#fff",
        textAlign: "center",
        padding: { xs: "2rem .5rem", md: "2rem 1rem" },
        cursor: "pointer",
        overflow: "auto",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 22 }}>
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
