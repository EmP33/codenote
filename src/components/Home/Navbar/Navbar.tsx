import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../lib/hooks";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import logo from "../../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        background: "var(--color-secondary-dark)",
        marginTop: { xs: 0, sm: 3 },
        padding: 1,
        boxShadow: 0,
        height: { xs: showMenu ? "100px" : "50px", sm: "auto" },
        overflow: "hidden",
        transition: "height .1s ease-in",
      }}
    >
      <Toolbar
        sx={{
          padding: { xs: 0, sm: "0 1rem 0 1rem" },
          display: { xs: "grid", sm: "flex" },
          gridGap: { xs: 10, sm: 0 },
          gridTemplateColumns: "1fr max-content",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img src={logo} alt="logo" style={{ width: "150px" }} />
        </Box>
        <MenuIcon
          sx={{
            fontSize: 36,
            cursor: "pointer",
            display: { xs: "block", sm: "none" },
          }}
          onClick={() => setShowMenu((prevState) => !prevState)}
        />
        <Box>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
