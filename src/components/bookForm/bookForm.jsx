import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CustomTextField from "../customTextFeild/customTextFeild";
import useCreate from "../../customHooks/useCreate";

function BookForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    price: "",
  });

  const { saveData, loading, error, response } = useCreate(
    "http://localhost:3000/bookInventry/addNewBook"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(formData);
    onClose();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="d-flex flex-column gap-4 mt-4 book-form-wrap">
      <CustomTextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={!formData.title}
        helperText={!formData.title ? "Title is required" : ""}
      />

      <CustomTextField
        label="Author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        error={!formData.author}
        helperText={!formData.author ? "Author is required" : ""}
      />

      <CustomTextField
        label="ISBN"
        name="ISBN"
        value={formData.ISBN}
        onChange={handleChange}
        error={!formData.ISBN}
        helperText={!formData.ISBN ? "ISBN is required" : ""}
      />

      <CustomTextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        error={!formData.price}
        helperText={!formData.price ? "Price is required" : ""}
        type="number"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default BookForm;
