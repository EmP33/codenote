import { AppBar, Toolbar, Button, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../lib/hooks";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import logo from "../../../assets/logo.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  return (
    <AppBar
      position="static"
      sx={{
        background: "var(--color-secondary-dark)",
        marginTop: { xs: 0, sm: 3 },
        padding: 1,
        boxShadow: 0,
      }}
    >
      <Toolbar sx={{ padding: { xs: 0, sm: "0 1rem 0 1rem" } }}>
        <Box sx={{ flex: 1 }}>
          <img src={logo} alt="logo" />
        </Box>

        {!user ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="info">
              Login
            </Button>
          </Link>
        ) : (
          <Button
            variant="outlined"
            color="info"
            onClick={() => {
              navigate("/client");
            }}
          >
            Dashboa
          </Button>
        )}
        {!user ? (
          <Link to="/guest" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="info" sx={{ ml: 2 }}>
              Continue as guest
            </Button>
          </Link>
        ) : (
          ""
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
