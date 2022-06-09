import { Box } from "@mui/material";
import React from "react";

interface IColorPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  base: string;
}

const ColorPalette: React.FC<IColorPalette> = ({
  primary,
  secondary,
  tertiary,
  base,
}) => {
  const changeColorHandler = () => {
    const root = document.querySelector(":root");

    // @ts-ignore
    root.style.setProperty("--color-secondary", tertiary); /*Block elements*/
    // @ts-ignore
    root.style.setProperty("--color-secondary-dark", secondary);
    // @ts-ignore
    root.style.setProperty("--color-tertiary-dark", primary); /*Background*/
    //@ts-ignore
    root.style.setProperty("--color-tertiary-light", base); /*Background*/

    localStorage.setItem(
      "CNTheme",
      JSON.stringify({ primary, secondary, tertiary, base })
    );
  };

  return (
    <Box
      onClick={changeColorHandler}
      sx={{
        border: `10px solid ${primary}`,
        outline: `10px solid ${secondary}`,
        background: tertiary,
        borderRadius: "50%",
        width: 50,
        height: 50,
        cursor: "pointer",
        margin: 2,

        "&:hover": {
          filter: "brightness(110%)",
        },
      }}
    ></Box>
  );
};

export default ColorPalette;
