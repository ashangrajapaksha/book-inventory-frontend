import React from "react";
import { TextField } from "@mui/material";

function Input({ label, value, onChange }) {
  return (
    <>
      {" "}
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
