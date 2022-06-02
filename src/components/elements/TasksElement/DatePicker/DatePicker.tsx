import React, { useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";

interface IDatePickerComponent {
  onDateSet: (value: Date | null) => void;
  date: Date | null;
}

const DatePickerComponent: React.FC<IDatePickerComponent> = ({
  onDateSet,
  date,
}) => {
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
        <DatePicker
          label="Custom input"
          value={date}
          onChange={(newValue) => {
            onDateSet(newValue);
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default React.memo(DatePickerComponent);
