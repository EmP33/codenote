import React from "react";
import { Box } from "@mui/material";

import { DotPulse } from "@uiball/loaders";

const LoadingPage: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
      }}
    >
      <DotPulse size={40} speed={1.3} color="black" />
    </Box>
  );
};

export default LoadingPage;
