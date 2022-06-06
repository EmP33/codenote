import React, { useState, useRef } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import Task from "./Task/Task";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import { addTask } from "../../../store/user-slice";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "./DatePicker/DatePicker";

const Tasks: React.FC = () => {
  const dispatch = useAppDispatch();
  const taskRef = useRef<HTMLInputElement>(null);
  const [showTextField, setShowTextField] = useState(false);
  const [taskError, setTaskError] = useState(false);
  const [date, setDate] = React.useState<Date | null>(new Date());
  const user = useAppSelector((state) => state.user.user);
  const userData = useAppSelector((state) => state.user.userData);

  const addTaskHandler = () => {
    setShowTextField(true);
    // @ts-ignore
    taskRef.current.focus();
    if (!showTextField) return;
    // Add task functionality
    if (!taskRef.current) return;
    if (taskRef.current.value === "") {
      return setTaskError(true);
    }

    setTaskError(false);
    setShowTextField(false);
    dispatch(
      addTask(user.uid, {
        title: taskRef.current.value,
        date: date ? date.getTime() : new Date().getTime(),
        status: "progress",
        id: uuidv4(),
        pinnedNote: {},
      })
    );
    taskRef.current.value = "";
  };

  return (
    <Card
      sx={{
        background: "var(--color-tertiary-light)",
        minWidth: { xs: "100%", sm: 450 },
        color: "#fff",
        textAlign: "center",
        padding: { xs: "2rem .5rem", md: "2rem 1rem" },
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 22 }}>
          TASKS
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          {userData.tasks &&
            !!userData.tasks.length &&
            userData.tasks.map(({ task }) => (
              <Task
                key={task.id}
                title={task.title}
                date={task.date}
                id={task.id}
                status={task.status}
                pinnedNote={task.pinnedNote}
              />
            ))}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "input::placeholder": { color: taskError ? "red" : "#555" },
            }}
          >
            <IconButton
              onClick={addTaskHandler}
              aria-label="delete"
              size="small"
              sx={{ p: 0 }}
            >
              <AddBoxIcon
                fontSize="inherit"
                sx={{ fontSize: 40, color: "#fff" }}
              />
            </IconButton>
            <input
              onKeyUp={(e) => e.key === "Enter" && addTaskHandler()}
              type="text"
              style={{
                padding: showTextField ? 5 : 0,
                outline: "none",
                border: taskError ? "2px solid red" : "none",
                width: showTextField ? 250 : 0,
                fontSize: 16,
                transition: "width .2s ease-in",
              }}
              placeholder={taskError ? "Someting went wrong" : ""}
              ref={taskRef}
              onFocus={() => setTaskError(false)}
            />
            {showTextField && <DatePicker onDateSet={setDate} date={date} />}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tasks;
