import React, { Suspense, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AnimatePresence } from "framer-motion";
import ClientPage from "./pages/ClientPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { useDispatch } from "react-redux";
import { useAppSelector } from "./lib/hooks";
import { userActions } from "./store/user-slice";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));

const theme = createTheme({
  palette: {
    primary: { main: "#121451" },
    secondary: { main: "#4e4ca5" },
    info: { main: "#fff" },
  },
});

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentUser = useAppSelector((state) => state.user.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.fetchUser(user));
      } else {
        dispatch(userActions.fetchUser(user));
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h1>Loading..</h1>}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/client" element={<ClientPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
