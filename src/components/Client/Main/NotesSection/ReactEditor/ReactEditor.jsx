import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../constants";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const ReactEditorJS = createReactEditorJS();

const ReactEditor = ({ editorCore }) => {
  const params = useParams();
  const userData = useSelector((state) => state.user.userData);

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
          blocks:
            params.note !== "new"
              ? userData.notes.find((note) => note.id === params.note)
                ? userData.notes.find((note) => note.id === params.note).blocks
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
