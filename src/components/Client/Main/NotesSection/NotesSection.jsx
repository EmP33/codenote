import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import HomeNotes from "../HomeSection/HomeNotes/Notes";

import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants";
import { Box, Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../../../store/user-slice";
import { v1 as uuidv1 } from "uuid";

const NotesWrapper = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
const EditorContainer = styled.div`
  grid-column: 1/-1;
  display: grid;
  overflow: hidden;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
`;

/* Creating a new instance of the editor. */
const ReactEditorJS = createReactEditorJS();

const NotesSection = () => {
  const dispatch = useDispatch();
  const editorCore = useRef(null);
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.user.userData);
  const { uid } = user;

  /* A callback function that is called when the editor is initialized. */
  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  /* Saving the data from the editor. */
  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();

    dispatch(
      addNote(uid, {
        id: uuidv1(),
        blocks: savedData.blocks,
        date: savedData.time,
      })
    );
  }, [dispatch, uid]);

  return (
    <NotesWrapper>
      <HomeNotes />
      <EditorContainer>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            borderRadius: "20px 20px 0 0 ",
            width: "100%",
            margin: "0 auto",
            background: "var(--color-tertiary-dark)",
            cursor: "pointer",
          }}
          onClick={handleSave}
        >
          Save
        </Button>
        <Box
          sx={{
            background: "#fff",
            color: "#333",
            fontSize: 20,
            borderRadius: 5,
            padding: 1,
            marginTop: 4,
          }}
        >
          <ReactEditorJS
            onInitialize={handleInitialize}
            tools={EDITOR_JS_TOOLS}
            defaultValue={{
              time: 1635603431943,
              blocks: [
                {
                  id: "sheNwCUP5A",
                  type: "header",
                  data: {
                    text: "Editor.js",
                    level: 2,
                  },
                },
                {
                  id: "12iM3lqzcm",
                  type: "paragraph",
                  data: {
                    text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
                  },
                },
                {
                  id: "fvZGuFXHmK",
                  type: "header",
                  data: {
                    text: "Key features",
                    level: 3,
                  },
                },
              ],
            }}
          />
        </Box>
      </EditorContainer>
    </NotesWrapper>
  );
};

export default NotesSection;
