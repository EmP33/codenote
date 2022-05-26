import React from "react";

import { Box, Checkbox, Typography } from "@mui/material";

interface TaskProps {
  title: string;
  date: string;
}

const Task: React.FC<TaskProps> = ({ title, date }) => {
  return (
    <Box
      sx={{
        background: "#fff",
        color: "var(--color-primary)",
        display: "grid",
        gridTemplateColumns: "repeat(2,minmax(min-content,max-content)) 1fr",
        alignItems: "center",
        padding: 0.5,
        marginBottom: 3,
        borderRadius: 1,
      }}
    >
      <Checkbox color="secondary" />
      <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
        {title}
      </Typography>
      <Typography
        sx={{
          justifySelf: "flex-end",
          marginRight: 1,
          fontSize: { xs: 12, sm: 14, md: 16 },
        }}
        color="secondary"
      >
        {date}
      </Typography>
    </Box>
  );
};

export default Task;
