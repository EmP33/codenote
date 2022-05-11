import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";

import { logo } from "../../assets";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "var(--color-tertiary)",
        marginTop: 3,
        padding: 1,
        boxShadow: 0,
      }}
    >
      <Toolbar>
        <img src={logo} alt="siema" width={75} />
        <Typography
          variant="h5"
          sx={{
            marginLeft: 1,
            fontFamily: "var(--font-heading)",
            flexGrow: 1,
          }}
        >
          CODENOTE
        </Typography>
        <Button variant="outlined" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
