import React from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#fff",
  color: "#333",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  textAlign: "center",
};

interface IDeleteNoteModal {
  open: boolean;
  handleClose: () => void;
  onDelete: () => void;
}

const DeleteNoteModal: React.FC<IDeleteNoteModal> = ({
  open,
  handleClose,
  onDelete,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            You will delete one with your notes
          </Typography>
          <Button
            onClick={onDelete}
            variant="contained"
            sx={{ margin: "0 5px" }}
            color="error"
          >
            Delete
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "0 5px" }}
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default React.memo(DeleteNoteModal);
