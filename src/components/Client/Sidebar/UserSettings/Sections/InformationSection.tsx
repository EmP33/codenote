import React from "react";
import { Typography, Box } from "@mui/material";
import { useAppSelector } from "../../../../../lib/hooks";

const InformationSection = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Informations
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: "bold" }}>
          Name:&nbsp;
        </Typography>
        <Typography variant="body1">
          {user.displayName ? user.displayName : "Anonymous"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: "bold" }}>
          Email:&nbsp;
        </Typography>
        <Typography variant="body1">
          {user.email ? user.email : "No email address"}
        </Typography>
      </Box>{" "}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: "bold" }}>
          Email Verification:&nbsp;
        </Typography>
        <Typography variant="body1">
          {user.emailVerified ? "Yes" : "No"}
        </Typography>
      </Box>
    </Box>
  );
};

export default InformationSection;
