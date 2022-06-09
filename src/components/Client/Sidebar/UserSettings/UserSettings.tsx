import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogContent,
  Box,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";

import LoginSection from "./Sections/LoginSection";

import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

import SettingsMenu from "./SettingsMenu";
import PreferencesSection from "./Sections/PreferencesSection";
import InformationSection from "./Sections/InformationSection";

interface IUserSettings {
  onClose: () => void;
  showSettings: boolean;
}

const UserSettings: React.FC<IUserSettings> = ({ showSettings, onClose }) => {
  const [tab, setTab] = useState("preferences");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const changeTabHandler = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <Dialog
      maxWidth="xl"
      fullScreen={fullScreen}
      open={showSettings}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Settings
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme: any) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent
        sx={{
          minHeight: 300,
          minWidth: { xs: 0, md: 700 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          columnGap: 2,
          color: "#555",
        }}
      >
        <SettingsMenu onChange={changeTabHandler} tab={tab} />
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            borderTop: { xs: "1px solid #555", md: 0 },
            paddingTop: { xs: 2, md: 0 },
          }}
        >
          {tab === "login" && <LoginSection />}
          {tab === "preferences" && <PreferencesSection />}
          {tab === "information" && <InformationSection />}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(UserSettings);
