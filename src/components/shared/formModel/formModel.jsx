import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import BookForm from "../bookForm/bookForm";

function FormModel() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <div className="d-flex justify-content-end book-add-btn">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add Book
        </Button>
      </div>
      <div className="modal-wrap">
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add New Book</DialogTitle>
          <DialogContent>
            <BookForm onClose={handleClose} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default FormModel;
