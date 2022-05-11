import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const theme = createTheme({
  palette: {
    primary: { main: "#121451" },
    secondary: { main: "#4e4ca5" },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
