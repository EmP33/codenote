import React, { useState, useEffect, useCallback } from "react";
import { Box, Checkbox, Typography, IconButton, Tooltip } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { changeTaskStatus } from "../../../../store/user-slice";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeTask, addTask } from "../../../../store/user-slice";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import NotePopover from "./NotePopover/NotePopover";
import { useNavigate, useLocation } from "react-router-dom";

interface TaskProps {
  title: string;
  date: string;
  status: string;
  id: string;
  pinnedNote: { blocks: any[]; id: string; date: number; views: number };
}

const Task: React.FC<TaskProps> = ({ title, date, status, id, pinnedNote }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user);
  const [checked, setChecked] = useState(status === "completed");
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const dueDate = new Date(date);
  const [notePopoverAnchor, setNotePopoverAnchor] =
    React.useState<HTMLButtonElement | null>(null);

  const openNotePopoverHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setNotePopoverAnchor(event.currentTarget);
  };
  const closeNotePopoverHandler = useCallback(() => {
    setNotePopoverAnchor(null);
  }, []);

  const setPinnedNoteHandler = useCallback((noteTitle: string, note: {}) => {
    dispatch(
      addTask(user.uid, {
        title: title,
        date: date,
        status: status,
        id: id,
        pinnedNote: note,
      })
    );
  }, []);

  const showDeleteHandler = () => {
    if (checked) {
      setShowDelete(true);
    }
  };

  useEffect(() => {
    setChecked(status === "completed");
  }, [status]);

  const changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let status: string;
    if (e.target.checked) {
      // If is checked
      status = "completed";
    } else {
      // If isnt
      status = "progress";
    }
    dispatch(
      changeTaskStatus(user.uid, {
        title: title,
        status: status,
        date: date,
        id: id,
        pinnedNote: pinnedNote || {},
      })
    );
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr max-content",
      }}
    >
      <Box
        onMouseOver={showDeleteHandler}
        onMouseLeave={() => setShowDelete(false)}
        sx={{
          background: "#fff",
          color: "var(--color-primary)",
          display: "grid",
          gridTemplateColumns: location.pathname.includes("tasks")
            ? {
                xs: "repeat(2,minmax(min-content,max-content)) 1fr 1fr",
                sm: "minmax(min-content,max-content) 100px 1fr 1fr",
              }
            : "repeat(2,minmax(min-content,max-content)) 1fr",
          alignItems: "center",
          padding: 0.5,
          marginBottom: 2,
          borderRadius: showDelete ? "4px 0 0 4px" : 1,
        }}
      >
        <Checkbox
          checked={checked}
          color="secondary"
          onChange={changeStatusHandler}
        />
        <Typography
          sx={{
            fontSize: { xs: 12, sm: 14, md: 16 },
            textDecoration: checked ? "line-through" : "none",
          }}
        >
          {title}
        </Typography>
        {location.pathname.includes("tasks") && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Tooltip title="Pin Note">
              <IconButton
                onClick={openNotePopoverHandler}
                sx={{ justifySelf: "center" }}
              >
                <InsertLinkIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </IconButton>
            </Tooltip>
            <NotePopover
              anchorEl={notePopoverAnchor}
              open={Boolean(notePopoverAnchor)}
              handleClose={closeNotePopoverHandler}
              setPinnedNote={setPinnedNoteHandler}
            />
            {pinnedNote && (
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.54)",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  fontSize: { xs: 12, sm: 14, md: 16 },
                }}
                onClick={() => navigate(`/client/notes/${pinnedNote.id}`)}
              >
                {pinnedNote.blocks
                  ? pinnedNote?.blocks.find(
                      (block: { data: {}; id: string; type: string }) =>
                        block.type === "header"
                    )
                    ? pinnedNote?.blocks.find(
                        (block: { data: {}; id: string; type: string }) =>
                          block.type === "header"
                      ).data.text
                    : "No header"
                  : "No header"}
              </Typography>
            )}
          </Box>
        )}

        <Typography
          sx={{
            justifySelf: "flex-end",
            marginRight: 1,
            fontSize: { xs: 12, sm: 14, md: 16 },
          }}
          color="secondary"
        >
          {dueDate.getFullYear()}/{dueDate.getMonth() + 1 <= 9 && "0"}
          {dueDate.getMonth() + 1}/{dueDate.getDate() <= 9 && "0"}
          {dueDate.getDate()}
        </Typography>
      </Box>
      <Box
        onMouseOver={showDeleteHandler}
        onMouseLeave={() => setShowDelete(false)}
        sx={{
          width: showDelete ? 50 : 0,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#d50000",
          borderRadius: "0 4px 4px 0",
          transition: "width .2s ease-in",
          overflow: "hidden",

          "&:hover": {
            backgroundColor: "#ab1818",
          },
        }}
      >
        <DeleteIcon onClick={() => dispatch(removeTask(user.uid, id))} />
      </Box>
    </Box>
  );
};

export default Task;
