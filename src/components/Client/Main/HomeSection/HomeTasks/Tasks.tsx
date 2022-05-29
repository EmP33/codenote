import { Box } from "@mui/material";
import TasksContainer from "../../../../elements/TasksElement/Tasks";

const Tasks: React.FC = () => {
  return (
    <Box
      sx={{
        gridColumn: "1 / 2",
        minWidth: { xs: "100%", sm: 450 },
        margin: "0 auto",
      }}
    >
      <TasksContainer />
    </Box>
  );
};

export default Tasks;
