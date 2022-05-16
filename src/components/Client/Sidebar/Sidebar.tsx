import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../../lib/hooks";

const Sidebar: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Box sx={{ width: "300px", height: "95vh", border: "2px solid red" }}>
      {user?.displayName || user?.email}
    </Box>
  );
};

export default Sidebar;
