import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Box, TextField, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

interface IDatePickerComponent {
  onDateSet: (value: Date | null) => void;
  date: Date | null;
}

const DatePickerComponent: React.FC<IDatePickerComponent> = ({
  onDateSet,
  date,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "& button svg": {
          p: 0,
          color: "#fff",
          fontSize: 30,
        },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {fullScreen ? (
          <MobileDatePicker
            value={date}
            onChange={(newValue) => {
              onDateSet(newValue);
            }}
            renderInput={(params) => <TextField color="info" {...params} />}
          />
        ) : (
          <DesktopDatePicker
            value={date}
            onChange={(newValue) => {
              onDateSet(newValue);
            }}
            renderInput={(params) => <TextField color="info" {...params} />}
          />
        )}
      </LocalizationProvider>
    </Box>
  );
};

export default React.memo(DatePickerComponent);
