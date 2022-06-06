import { Box } from "@mui/material";
//@ts-ignore
import { EditTextarea } from "react-edit-text";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { updateDraftElement } from "../../../store/user-slice";

interface IHandleSave {
  (name: any, value: string, previousValue: any): void;
}

const DraftElement: React.FC = () => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.user.userData);
  const user = useAppSelector((state) => state.user.user);
  const handleSave: IHandleSave = ({ name, value, previousValue }) => {
    dispatch(updateDraftElement(value, user.uid));
  };

  return (
    <Box
      sx={{
        background: "var(--color-tertiary-light)",
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
          background: "var(--color-tertiary-light)",
          margin: "0 auto",
          fontSize: "18px",
          color: "#fff",
          padding: 10,
          wordWrap: "break-word",
        }}
        defaultValue={userData.draft ? userData.draft.data : ""}
        onSave={handleSave}
        rows={15}
      />
    </Box>
  );
};

export default DraftElement;
