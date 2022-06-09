import { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
//@ts-ignore
import { EditTextarea } from "react-edit-text";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { updateDraftElement } from "../../../store/user-slice";
import { guestActions } from "../../../store/guest-slice";

interface IHandleSave {
  (name: any, value: string, previousValue: any): void;
}

const DraftElement: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);
  const user = useAppSelector((state) => state.user.user);
  const guestDraft = useAppSelector((state) => state.guest.draft);
  const handleSave: IHandleSave = ({ name, value, previousValue }) => {
    if (location.pathname.includes("/client")) {
      dispatch(updateDraftElement(value, user.uid));
    } else {
      localStorage.setItem("draft", value);
      dispatch(guestActions.setDraft(value));
    }
  };

  useEffect(() => {
    const draft = localStorage.getItem("draft");
    dispatch(guestActions.setDraft(draft));
  }, [dispatch]);

  return (
    <Box
      sx={{
        background: "var(--color-secondary)",
        minHeight: 200,
        width: "100%",
        overflow: "clip",
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <EditTextarea
        style={{
          width: "100%",
          height: "100%",
          background: "var(--color-secondary)",
          margin: "0 auto",
          fontSize: "18px",
          color: "#fff",
          padding: 10,
          wordWrap: "break-word",
        }}
        defaultValue={
          location.pathname.includes("client")
            ? userData.draft
              ? userData.draft.data
              : ""
            : guestDraft !== ""
            ? guestDraft
            : ""
        }
        placeholder="Type something..."
        onSave={handleSave}
        rows={15}
      />
    </Box>
  );
};

export default DraftElement;
