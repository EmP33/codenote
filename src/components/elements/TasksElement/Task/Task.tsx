import React, { useState, useEffect } from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { changeTaskStatus } from "../../../../store/user-slice";

interface TaskProps {
  title: string;
  date: string;
  status: string;
  id: string;
}

const Task: React.FC<TaskProps> = ({ title, date, status, id }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [checked, setChecked] = useState(status === "completed");
  const dueDate = new Date(date);

  useEffect(() => {
    setChecked(status === "completed");
  }, [status]);

  const changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let status: string;
    if (e.target.checked) {
      // If is checked
      status = "completed";
    } else {
      // If isnt
      status = "progress";
    }
    dispatch(
      changeTaskStatus(user.uid, {
        title: title,
        status: status,
        date: date,
        id: id,
      })
    );
  };
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
      <Checkbox
        checked={checked}
        color="secondary"
        onChange={changeStatusHandler}
      />
      <Typography
        sx={{
          fontSize: { xs: 12, sm: 14, md: 16 },
          textDecoration: checked ? "line-through" : "none",
        }}
      >
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
        {dueDate.getFullYear()}/{dueDate.getMonth() + 1 <= 9 && "0"}
        {dueDate.getMonth() + 1}/{dueDate.getDate() <= 9 && "0"}
        {dueDate.getDate()}
      </Typography>
    </Box>
  );
};

export default Task;
