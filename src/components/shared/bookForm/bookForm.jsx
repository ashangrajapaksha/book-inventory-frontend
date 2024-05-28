import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CustomTextField from "../../common/forms/customTextFeild";
import useCreate from "../../../customHooks/useCreate";
import { CustomForm } from "../../common/forms/customForm";

import { isPrice, isRequired } from "../../../config/validation.config";

function BookForm({ onClose, bookData }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    author: "",
    ISBN: "",
    price: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (bookData) {
      setFormData(bookData);
      setIsEdit(true);
      console.log(errors);
    }
  }, [bookData]);

  const { saveData, loading, error, response } = useCreate(
    isEdit
      ? "http://localhost:3000/bookInventry"
      : "http://localhost:3000/bookInventry/addNewBook"
  );

  const handleChange = (name, value) => {
    setFormData((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  const setErrorCustom = (name, value) => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = isEdit ? bookData._id : null;
    saveData(formData, isEdit, id);
    onClose();
  };

  if (loading)
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="d-flex flex-column mt-4 book-form-wrap">
      <CustomForm
        className="login-form"
        onSubmit={onSubmit}
        setError={setErrorCustom}
        errors={errors}
      >
        <div className="d-flex flex-column gap-2">
          <CustomTextField
            className="cust-input"
            placeholder="Enter Title"
            name="title"
            label="Title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            errorMsg={errors.title}
            setError={setErrorCustom}
            validations={[isRequired]}
            maxLength={100}
          />

          <CustomTextField
            className="cust-input"
            placeholder="Enter Author"
            name="author"
            label="Author"
            type="text"
            value={formData.author}
            onChange={handleChange}
            errorMsg={errors.author}
            setError={setErrorCustom}
            validations={[isRequired]}
            maxLength={100}
          />

          <CustomTextField
            className="cust-input"
            placeholder="Enter ISBN"
            name="ISBN"
            label="ISBN"
            type="text"
            value={formData.ISBN}
            onChange={handleChange}
            errorMsg={errors.ISBN}
            setError={setErrorCustom}
            validations={[isRequired]}
            maxLength={100}
          />

          <CustomTextField
            className="cust-input"
            placeholder="Enter Price"
            name="price"
            label="Price($)"
            type="number"
            value={formData.price}
            onChange={handleChange}
            errorMsg={errors.price}
            setError={setErrorCustom}
            validations={[isRequired, isPrice]}
            maxLength={100}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </CustomForm>
    </div>
  );
}

export default BookForm;
