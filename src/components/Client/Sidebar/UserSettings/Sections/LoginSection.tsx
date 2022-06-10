import React, { useRef, useState } from "react";
import {
  FormControl,
  Button,
  Typography,
  TextField,
  Alert,
  Box,
} from "@mui/material";
import { changePassword } from "../../../../../store/user-slice";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";

const LoginSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const changePasswordHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordRef.current || !passwordConfirmationRef.current) {
      return setIsSuccess(false);
    }
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setIsSuccess(false);
    }
    if (
      passwordRef.current.value === "" ||
      passwordConfirmationRef.current.value === ""
    ) {
      return setIsSuccess(false);
    }
    if (
      passwordRef.current.value.length < 8 ||
      passwordConfirmationRef.current.value.length < 8
    ) {
      return setIsSuccess(false);
    }
    if (passwordRef.current.value) {
      dispatch(changePassword(passwordRef.current.value));
      setIsSuccess(true);
    }
  };
  return (
    <>
      {user ? (
        <>
          <Typography variant="h5" gutterBottom>
            Login and security
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Change password
          </Typography>
          <FormControl>
            <form onSubmit={changePasswordHandler}>
              <Box
                sx={{
                  display: "flex",
                  columnGap: 1,
                  rowGap: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  onFocus={() => setIsSuccess(null)}
                  error={isSuccess === false}
                  inputRef={passwordRef}
                  label="New password"
                  variant="outlined"
                  type="password"
                />
                <TextField
                  onFocus={() => setIsSuccess(null)}
                  error={isSuccess === false}
                  inputRef={passwordConfirmationRef}
                  label="Confirm password"
                  variant="outlined"
                  type="password"
                />
                <Button
                  variant="contained"
                  sx={{
                    background: "var(--color-tertiary-dark)",
                    height: "50px",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": { background: "var(--color-tertiary-light)" },
                  }}
                  type="submit"
                >
                  Save
                </Button>
              </Box>
            </form>
          </FormControl>
          {isSuccess && (
            <Alert severity="success">Successfully updated password!</Alert>
          )}
          {isSuccess === false && (
            <Alert severity="error">
              Something went wrong! Check that the new password have at least 8
              letters.
            </Alert>
          )}
        </>
      ) : (
        <Box>
          <Typography variant="body1">You're on guest account</Typography>
        </Box>
      )}
    </>
  );
};

export default LoginSection;
