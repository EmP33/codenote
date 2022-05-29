import React from "react";
import { FormControl, Button, Typography, TextField } from "@mui/material";

const LoginSection = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Login and security
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Change password
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          columnGap: 1,
          rowGap: 1,
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="New password"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Confirm password"
          variant="outlined"
        />
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </FormControl>
    </>
  );
};

export default LoginSection;
