import React, { useState } from "react";
import DataTable from "../../components/dataTable/dataTable";
import "./BookInventory.scss";
import Button from "@mui/material/Button";
import Input from "../../components/input/input";

function BookInventory() {
  const [inputValue, setInputValue] = useState();
  const [inputValue1, setInputValue1] = useState();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  return (
    <div className="background">
      <DataTable />
      <Input
        label="Enter Text:"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Input
        label="Enter Text:"
        value={inputValue1}
        onChange={handleInputChange1}
      />
    </div>
  );
}

export default BookInventory;
