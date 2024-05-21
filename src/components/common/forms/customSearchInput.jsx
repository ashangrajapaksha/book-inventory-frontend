import React from "react";

function CustomSearchInput({ label, placeholder, onChange = () => undefined }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
        }}
        className="form-control"
      />
    </div>
  );
}

export default CustomSearchInput;
