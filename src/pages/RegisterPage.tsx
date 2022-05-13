import React from "react";
import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";
import { TextField, Button } from "@mui/material";

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout>
      <>
        <TextField
          sx={{ width: "100%", margin: "0 0 1rem 0" }}
          label="Email address"
          color="secondary"
          type="email"
        />
        <TextField
          sx={{ width: "100%", margin: "0 0 1rem 0" }}
          label="Password"
          color="secondary"
          type="password"
        />
        <TextField
          sx={{ width: "100%", margin: "0 0 1rem 0" }}
          label="Confirm Password"
          color="secondary"
          type="password"
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%" }}
          size="large"
        >
          Continue
        </Button>
      </>
    </AuthLayout>
  );
};

export default RegisterPage;
