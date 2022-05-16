import React, { FormEvent, useRef, useState } from "react";
import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";
import { TextField, Button } from "@mui/material";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);
  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    setFormError(false);
    setEmailError(false);
    setPasswordError(false);
    if (!emailRef.current || !passwordRef.current) {
      return setFormError(true);
    }

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (enteredEmail === "" && enteredPassword === "") {
      return setFormError(true);
    }
    if (enteredEmail === "" || !enteredEmail.includes("@")) {
      return setEmailError(true);
    }
    if (enteredPassword === "" || enteredPassword.length < 8) {
      return setPasswordError(true);
    }

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        navigate("/client");
      })
      .catch((error) => {
        if (error.message.includes("user-not-found")) {
          setEmailError(true);
        }
        if (error.message.includes("wrong-password")) {
          setPasswordError(true);
        }
      });
  };
  return (
    <AuthLayout>
      <>
        <form onSubmit={loginHandler}>
          <TextField
            sx={{ width: "100%", margin: "0 0 1rem 0" }}
            label="Email address"
            color="secondary"
            type="email"
            inputRef={emailRef}
            error={emailError || formError}
            helperText={emailError || formError ? "Incorrect email." : ""}
            onChange={() => {
              setEmailError(false);
              setFormError(false);
            }}
          />
          <TextField
            sx={{ width: "100%", margin: "0 0 1rem 0" }}
            label="Password"
            color="secondary"
            type="password"
            inputRef={passwordRef}
            error={passwordError || formError}
            helperText={
              formError
                ? "Password must be at least 8 letters long."
                : passwordError && "Password must be at least 8 letters long."
            }
            onChange={() => {
              setPasswordError(false);
              setFormError(false);
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "100%" }}
            size="large"
            type="submit"
          >
            Continue
          </Button>
        </form>
      </>
    </AuthLayout>
  );
};

export default LoginPage;
