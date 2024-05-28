import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import BookForm from "../bookForm/bookForm";

function FormModel({ open = false, handleClose, book }) {
  return (
    <div>
      {" "}
      <div className="modal-wrap">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {book ? "Edit Book" : "Add New Book"}
          </DialogTitle>
          <DialogContent>
            <BookForm onClose={handleClose} bookData={book} />
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
