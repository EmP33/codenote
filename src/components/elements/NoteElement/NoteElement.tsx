import React, { useState, useCallback } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteNoteModal from "./DeleteNoteModal/DeleteNoteModal";
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import { removeNote } from "../../../store/user-slice";

interface NoteElementProps {
  title: string;
  date: string;
  content: string;
  id: string;
  hoverOnNotes: boolean;
}

const NoteElement: React.FC<NoteElementProps> = ({
  title,
  date,
  content,
  id,
  hoverOnNotes,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => setOpen(false), []);
  const user = useAppSelector((state) => state.user.user);

  const deleteModalHandler = () => {
    navigate("/client");
    dispatch(removeNote(user.uid, id));
  };

  return (
    <>
      <Card
        sx={{
          height: hoverOnNotes ? 250 : 100,
          width: hoverOnNotes ? 350 : 150,
          fontSize: 2,
          margin: "2rem 0",
          background: "var(--color-tertiary-light)",
          color: "#fff",
          border: "1px solid #fff",
          position: "relative",
          zIndex: 1,
          cursor: "pointer",
          flexShrink: 0,
          transition: "all .2s ease-in",
          transformOrigin: "center",

          "@media only screen and (max-width: 400px)": {
            width: "auto",
            maxWidth: 280,
          },

          "&:before": {
            content: "''",
            width: "100%",
            height: "70%",
            background: "var(--color-tertiary-dark)",
            position: "absolute",
            borderRadius: "0 0 50% 50%",
            top: 0,
            left: 0,
            zIndex: -1,
          },

          "&:hover": {
            filter: "brightness(110%)",
          },
        }}
      >
        <CardContent
          onClick={() => {
            navigate(`/client/notes/${id}`);
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "space-between", zIndex: 5 }}
          >
            <Typography
              id="title"
              variant="h5"
              sx={{
                fontSize: hoverOnNotes ? 18 : 12 /*18*/,
                marginBottom: 3,
                transition: "all .2s ease-in",
              }}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              id="date"
              variant="h6"
              sx={{
                fontSize: hoverOnNotes ? 16 : 11 /*16*/,
                color: "var(--color-base)",
                transition: "all .2s ease-in",
              }}
            >
              {date}
            </Typography>
          </Box>
          <Typography
            id="content"
            sx={{
              fontSize: hoverOnNotes ? 14 : 9 /*14*/,
              width: "75%",
              transition: "all .2s ease-in",
            }}
          >
            {content}
          </Typography>
        </CardContent>
        <IconButton
          sx={{ position: "absolute", right: 0, bottom: 5 }}
          color="inherit"
          onClick={handleOpen}
        >
          <DeleteIcon
            sx={{
              fontSize: hoverOnNotes ? 25 : 15 /*25*/,
              transition: "all .2s ease-in",
            }}
          />
        </IconButton>
      </Card>
      <DeleteNoteModal
        open={open}
        handleClose={handleClose}
        onDelete={deleteModalHandler}
      />
    </>
  );
};

export default React.memo(NoteElement);
