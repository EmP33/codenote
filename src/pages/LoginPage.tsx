import React from "react";
import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";
import { TextField, Button } from "@mui/material";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <>
        <form>
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
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "100%" }}
            size="large"
          >
            Continue
          </Button>
        </form>
      </>
    </AuthLayout>
  );
};

export default LoginPage;
