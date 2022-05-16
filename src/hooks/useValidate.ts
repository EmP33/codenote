import { useReducer } from "react";

const initialState = {
  message: "",
  error: false,
};

const validateReducer = (
  state: { message: string; error: boolean },
  action: { type: string; message: string; error?: boolean }
) => {
  if (action.type === "EMPTY") {
    return {
      message: action.message,
      error: true,
    };
  }
  if (action.type === "AT") {
    return { message: action.message, error: true };
  }
  if (action.type === "SHORT") {
    return { message: action.message, error: true };
  }
  return state;
};

const useValidate = (
  input: string,
  type: "email" | "password" | "confirmation"
) => {
  const [validateState, dispatch] = useReducer(validateReducer, initialState);

  if (type === "email") {
    if (!input.includes("@")) {
      return dispatch({
        type: "AT",
        message: "Input must have @ symbol.",
      });
    }
  }
  if (type === "password") {
    if (input.length < 8) {
      return dispatch({
        type: "SHORT",
        message: "Input must be at least 8 characters",
      });
    }
  }
  //   if (type === "confirmation") {
  //   }

  //   if (enteredConfirmPassword === "") {
  //     return setConfirmPasswordError(true);
  //   }
  //   if (input !== enteredConfirmPassword) {
  //     setConfirmPasswordError(true);
  //     return setPasswordError(true);
  //   }

  if (input === "") {
    dispatch({ type: "EMPTY", message: "Input cannot be empty" });
  }

  return { ...validateState };
};

export default useValidate;
