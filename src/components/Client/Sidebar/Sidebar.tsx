import React, { useState, useEffect } from "react";

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
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddIcon from "@mui/icons-material/Add";
import NoteIcon from "@mui/icons-material/Note";
import TaskIcon from "@mui/icons-material/Task";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { motion, AnimatePresence } from "framer-motion";

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

interface ISidebar {
  user: any;
  onSignOut: () => void;
}

const Sidebar: React.FC<ISidebar> = ({ user, onSignOut }) => {
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <Box
      sx={{
        width: { xs: "100%", md: 300 },
        height: { xs: "auto", md: "95vh" },
        background: "var(--color-tertiary)",
        borderRadius: 2,
        marginRight: { xs: 0, md: 1 },
        marginBottom: { xs: 3, md: 0 },
        display: "grid",
        gridTemplateRows: "repeat(4,max-content)",
        gridRowGap: 5,
        alignItems: "center",
        position: "relative",
        border: "1px solid var(--color-tertiary-dark)",
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
            {user?.displayName[0] || user?.email[0]}
          </Avatar>
        ) : (
          <Skeleton
            variant="circular"
            sx={{ bgcolor: "var(--color-tertiary-dark)" }}
            width={40}
            height={40}
          />
        )}

        <Typography variant="body1" sx={{ flex: 1, marginLeft: 1 }}>
          {user !== true ? (
            user?.displayName || user?.email
          ) : (
            <Skeleton
              sx={{ bgcolor: "var(--color-tertiary-dark)", marginRight: 1 }}
            />
          )}
        </Typography>
        <SettingsOutlinedIcon
          sx={{ "&:hover": { color: "#ccc", cursor: "pointer" } }}
        />
      </Box>
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
      >
        Create
      </Button>
      <Button
        onClick={expandMenuHandler}
        color="inherit"
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <ExpandMoreIcon
          style={{
            margin: "0 auto",
            fontSize: 30,
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
                <ListItemButton>
                  <HomeIcon sx={{ color: "#fff", marginRight: 2 }} />
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <NoteIcon sx={{ color: "#fff", marginRight: 2 }} />
                  <ListItemText primary="Notes" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
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
