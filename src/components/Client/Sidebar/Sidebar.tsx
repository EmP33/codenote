import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserDropdown from "./UserDropdown/UserDropdown";
import UserSettings from "./UserSettings/UserSettings";

import {
  Box,
  Avatar,
  Typography,
  Button,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Skeleton,
  Tooltip,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddIcon from "@mui/icons-material/Add";
import NoteIcon from "@mui/icons-material/Note";
import TaskIcon from "@mui/icons-material/Task";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { motion, AnimatePresence } from "framer-motion";
import CreateDropdown from "./CreateDropdown/CreateDropdown";

const navVariant = {
  initial: {
    height: "0",
  },
  animate: {
    height: "auto",
  },
  exit: {
    height: "0",
  },
};

const UserDropdownButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
`;

interface ISidebar {
  user: any;
  onSignOut: () => void;
}

const Sidebar: React.FC<ISidebar> = ({ user, onSignOut }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [createAnchor, setCreateAnchor] =
    React.useState<HTMLButtonElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width >= 900) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const expandMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const openSettingsHandler = () => {
    setShowSettings(true);
  };

  const closeSettingsHandler = useCallback(() => {
    setShowSettings(false);
  }, []);

  const handleCreateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCreateAnchor(event.currentTarget);
  };

  const handleCreateClose = useCallback(() => {
    setCreateAnchor(null);
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: 300 },
        minHeight: { xs: 0, md: "95vh" },
        height: "auto",
        background: "var(--color-tertiary)",
        borderRadius: { xs: 0, md: 2 },
        marginRight: { xs: 0, md: 1 },
        display: "grid",
        gridTemplateRows: "repeat(4,max-content)",
        gridRowGap: 5,
        alignItems: "center",
        position: "relative",
        border: { xs: 0, md: "1px solid var(--color-tertiary-dark)" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          background: "var(--color-tertiary)",
          borderRadius: "8px 8px 0 0 ",
        }}
      >
        {user !== true ? (
          <Avatar
            alt={user?.displayName || user?.email}
            sx={{
              background: "var(--color-tertiary-light)",
              border: "1px solid #fff",
            }}
          >
            {user.displayName ? user?.displayName[0] : user?.email[0]}
          </Avatar>
        ) : (
          <Skeleton
            variant="circular"
            sx={{ bgcolor: "var(--color-tertiary-dark)" }}
            width={40}
            height={40}
          />
        )}

        <Typography
          variant="body1"
          sx={{ flex: 1, marginLeft: 1, display: "flex" }}
        >
          {user !== true ? (
            user?.displayName || user?.email
          ) : (
            <Skeleton
              sx={{
                bgcolor: "var(--color-tertiary-dark)",
                marginRight: 1,
                width: "100%",
              }}
            />
          )}

          <UserDropdownButton onClick={handleClick}>
            <ExpandMoreIcon />
          </UserDropdownButton>
        </Typography>
        <Tooltip title="Settings">
          <SettingsOutlinedIcon
            onClick={openSettingsHandler}
            sx={{ "&:hover": { color: "#ccc", cursor: "pointer" } }}
          />
        </Tooltip>
        <UserSettings
          onClose={closeSettingsHandler}
          showSettings={showSettings}
        />
      </Box>
      {user !== true && (
        <UserDropdown
          user={user}
          handleClose={handleClose}
          anchorEl={anchorEl}
          onSignOut={onSignOut}
          open={Boolean(anchorEl)}
        />
      )}
      <Button
        id="signOutButton"
        variant="contained"
        disableElevation
        sx={{
          background: "var(--color-tertiary-light)",
          "&:hover": { background: "var(--color-tertiary-dark)" },
        }}
        color="secondary"
        size="large"
        startIcon={<AddIcon />}
        onClick={handleCreateClick}
      >
        Create
      </Button>
      <CreateDropdown
        open={Boolean(createAnchor)}
        anchorEl={createAnchor}
        handleClose={handleCreateClose}
      />
      <Button
        onClick={expandMenuHandler}
        color="inherit"
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <ExpandMoreIcon
          style={{
            margin: "0 auto",
            fontSize: 30,
            transform: showMenu ? "rotate(-180deg)" : "rotate(0)",
            transition: "all .2s ease-in-out",
          }}
        />
      </Button>
      <AnimatePresence>
        {showMenu && (
          <motion.nav
            aria-label="main mailbox folders"
            style={{
              height: "auto",
              overflow: "hidden",
            }}
            variants={navVariant}
            initial="initial"
            exit="exit"
            animate="animate"
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  selected={
                    !location.pathname.includes("notes") &&
                    !location.pathname.includes("tasks")
                  }
                  onClick={() => {
                    navigate("/client");
                  }}
                >
                  <HomeIcon sx={{ color: "#fff", marginRight: 2 }} />
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  selected={location.pathname.includes("notes")}
                  onClick={() => {
                    navigate("/client/notes");
                  }}
                >
                  <NoteIcon sx={{ color: "#fff", marginRight: 2 }} />
                  <ListItemText primary="Notes" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  selected={location.pathname.includes("tasks")}
                  onClick={() => {
                    navigate("/client/tasks");
                  }}
                >
                  <TaskIcon sx={{ color: "#fff", marginRight: 2 }} />
                  <ListItemText primary="Tasks" />
                </ListItemButton>
              </ListItem>
            </List>
          </motion.nav>
        )}
      </AnimatePresence>

      <Button
        variant="contained"
        sx={{
          display: { xs: "none", md: "block" },
          background: "var(--color-tertiary-light)",
          justifySelf: "center",
          position: "absolute",
          bottom: 20,
          "&:hover": { background: "var(--color-tertiary-dark)" },
        }}
        color="secondary"
        size="large"
        onClick={onSignOut}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default Sidebar;
