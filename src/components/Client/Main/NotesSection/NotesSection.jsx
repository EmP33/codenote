import { useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HomeNotes from "../HomeSection/HomeNotes/Notes";

import { Box, Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../../../store/user-slice";
import { v1 as uuidv1 } from "uuid";
import ReactEditor from "./ReactEditor/ReactEditor";

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

const NotesSection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const editorCore = useRef(null);
  const userData = useSelector((state) => state.user.userData);
  const user = useSelector((state) => state.user.user);
  const { uid } = user;

  /* Saving the data from the editor. */
  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();

    dispatch(
      addNote(uid, {
        id: params.note === "new" ? uuidv1() : params.note,
        blocks: savedData.blocks,
        date: savedData.time,
        views: 0,
      })
    );
  }, [dispatch, params.note, uid]);

  if (!userData.notes.length) return <h1>Loading..</h1>;

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
          <ReactEditor editorCore={editorCore} />
          {/* <ReactEditorJS
            holder="holder"
            onInitialize={handleInitialize}
            tools={EDITOR_JS_TOOLS}
            defaultValue={{
              time: 1635603431943,
              blocks: userData.notes[0].blocks,
            }}
          /> */}
        </Box>
      </EditorContainer>
    </NotesWrapper>
  );
};

export default NotesSection;
