import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "var(--color-tertiary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        padding: ".5rem 1rem .5rem 1rem",
      }}
    >
      <TextField
        InputLabelProps={{
          style: {
            color: "#fff",
          },
        }}
        sx={{ borderBottom: "2px solid #fff", input: { color: "#fff" } }}
        color="info"
        label="Join our mailing list"
        variant="standard"
      />
      <Box sx={{ display: "flex" }}>
        <InstagramIcon
          sx={{
            fontSize: 40,
            margin: "0 1rem 0 1rem",
            borderRadius: 1,
            "&:hover": { color: "#ccc" },
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: 40,
            borderRadius: 1,
            margin: "0 1rem 0 1rem",
            "&:hover": { color: "#ccc" },
          }}
        />
        <YouTubeIcon
          sx={{
            fontSize: 40,
            borderRadius: 1,
            margin: "0 1rem 0 1rem",
            "&:hover": { color: "#ccc" },
          }}
        />
      </Box>

      <Typography sx={{ fontSize: 14, marginTop: { xs: 2, sm: 0 } }}>
        &copy; Copyrights CodeNote made by EmP33
      </Typography>
    </Box>
  );
};

export default Footer;
