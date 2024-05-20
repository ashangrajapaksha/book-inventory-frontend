import React from "react";
import { TextField } from "@mui/material";

function CustomTextFeild({
  label,
  variant = "outlined",
  fullWidth = true,
  value,
  onChange,
  error = false,
  helperText = "",
  ...props
}) {
  return (
    <>
      {" "}
      <TextField
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        {...props}
        size="small"
      />
    </>
  );
}

export default CustomTextFeild;
