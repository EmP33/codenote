import React from "react";
import { Typography, Box } from "@mui/material";
import ColorPalette from "../SettingElements/ColorPalette";

const PreferencesSection = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Preferences
      </Typography>
      <Typography variant="body1">Choose your style:</Typography>
      <Box
        sx={{
          pl: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ColorPalette
          primary="#926e9a" /*--color-tertiary-dark*/
          secondary="#76659c" /*--color-secondary-dark*/
          tertiary="#947ec3" /*--color-secondary*/
          base="#daa4e6" /*--color-tertiary-light*/
        />
        <ColorPalette
          primary="#3A3845"
          secondary="#826F66"
          tertiary="#C69B7B"
          base="#464353"
        />
        <ColorPalette
          primary="#a49860"
          secondary="#383838"
          tertiary="#434343"
          base="#CDBE78"
        />
        <ColorPalette
          primary="#1a3c40"
          secondary="#1d5c63"
          tertiary="#417d7a"
          base="#1f484d"
        />
        <ColorPalette
          primary="#112D4E"
          secondary="#325b8c"
          tertiary="#3F72AF"
          base="#14365e"
        />
      </Box>
    </Box>
  );
};

export default PreferencesSection;
