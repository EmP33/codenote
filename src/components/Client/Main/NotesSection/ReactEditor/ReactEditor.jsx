import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../constants";
import { useParams, useLocation } from "react-router-dom";

import { addNote } from "../../../../../store/user-slice";
import { v1 as uuidv1 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

const ReactEditorJS = createReactEditorJS();

const ReactEditor = ({ editorCore }) => {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.user.userData);
  const currentNote = userData.notes.find((note) => note.id === params.note);
  const guestNotes = useSelector((state) => state.guest.notes);

  useEffect(() => {
    if (currentNote) {
      dispatch(
        addNote(user.uid, {
          id: params.note === "new" ? uuidv1() : params.note,
          blocks: currentNote.blocks,
          date: currentNote.date,
          views: currentNote.views,
        })
      );
    }
  }, []);

  const handleInitialize = React.useCallback(
    (instance) => {
      editorCore.current = instance;
    },
    [editorCore]
  );

  useEffect(() => {
    ReactDOM.render(
      <ReactEditorJS
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        defaultValue={{
          time: 1635603431943,
          blocks: location.pathname.includes("client")
            ? params.note !== "new"
              ? userData.notes.find((note) => note.id === params.note)
                ? userData.notes.find((note) => note.id === params.note).blocks
                : []
              : []
            : params.note !== "new"
            ? guestNotes.find((note) => note.id === params.note)
              ? guestNotes.find((note) => note.id === params.note).blocks
              : []
            : [],
        }}
      />,
      document.getElementById("react-editor-container")
    );
  }, []);

  return <div id="react-editor-container"></div>;
};

export default React.memo(ReactEditor);
