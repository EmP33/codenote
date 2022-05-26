import { Box } from "@mui/material";
import TasksContainer from "../../../../elements/TasksElement/Tasks";

const Tasks = () => {
  return (
    <Box
      sx={{
        gridColumn: "1 / 2",
        width: "90%",
        margin: "0 auto",
      }}
    >
      <TasksContainer />
    </Box>
  );
};

export default Tasks;
