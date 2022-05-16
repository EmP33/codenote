import React, { FormEvent, useRef, useState } from "react";
import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";
import { TextField, Button } from "@mui/material";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>();
  const confirmPasswordRef = useRef<HTMLInputElement>();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);

  const createUserHandler = (e: FormEvent) => {
    e.preventDefault();
    setFormError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (
      !emailRef.current ||
      !passwordRef.current ||
      !confirmPasswordRef.current
    ) {
      return setFormError(true);
    }

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;

    if (
      enteredEmail === "" &&
      enteredConfirmPassword === "" &&
      enteredPassword === ""
    ) {
      return setFormError(true);
    }
    if (enteredEmail === "" || !enteredEmail.includes("@")) {
      return setEmailError(true);
    }
    if (enteredPassword === "" && enteredPassword.length < 8) {
      return setPasswordError(true);
    }
    if (enteredConfirmPassword === "") {
      return setConfirmPasswordError(true);
    }
    if (enteredPassword !== enteredConfirmPassword) {
      setConfirmPasswordError(true);
      return setPasswordError(true);
    }

    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
      });
  };

  return (
    <AuthLayout>
      <>
        <form onSubmit={createUserHandler}>
          <TextField
            sx={{ width: "100%", margin: "0 0 1rem 0" }}
            label="Email address"
            color="primary"
            type="email"
            inputRef={emailRef}
            error={emailError || formError}
            helperText={emailError || (formError && "Incorrect email.")}
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
                : passwordError && confirmPasswordError
                ? "Passwords do not match"
                : passwordError && "Password must be at least 8 letters long."
            }
            onChange={() => {
              setPasswordError(false);
              setFormError(false);
            }}
          />
          <TextField
            sx={{ width: "100%", margin: "0 0 1rem 0" }}
            label="Confirm Password"
            color="secondary"
            type="password"
            inputRef={confirmPasswordRef}
            error={confirmPasswordError || formError}
            helperText={
              formError
                ? "Incorrect input."
                : passwordError && confirmPasswordError
                ? "Passwords do not match"
                : confirmPasswordError && "Input cannot be empty"
            }
            onChange={() => {
              setPasswordError(false);
              setConfirmPasswordError(false);
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

export default RegisterPage;
