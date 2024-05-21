import React, { useEffect, useState } from "react";
import {
  isRequired,
  unTouched,
  isPrice,
  isName,
  isMaxLength,
} from "../../../config/validation.config";

function CustomTextFeild({
  name = "",
  label = "",
  onChange = () => undefined,
  value = "",
  type = "text",
  disabled = false,
  extraClassesWrapper = "",
  extraClasses = "",
  placeholder = "",
  errorMsg = "",
  setError = () => undefined,
  hintTxt = "",
  validations = [],
  password = "",
  maxLength = 25,
}) {
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    if (errorMsg === unTouched) {
      setLocalError("");
      console.log("CALL");
    }

    for (let i in validations) {
      if (validations[i] === isRequired) {
        if (value !== "") {
          setLocalError((pre) => {
            if (pre === isRequired) return "";
            else return pre;
          });
        } else {
          setLocalError(isRequired);
        }
      } else if (validations[i] === isPrice) {
        let pattern = /^-?\d*\.?\d+$/;
        if (pattern.test(value)) {
          setLocalError((pre) => {
            if (pre === isName) return "";
            else return pre;
          });
        } else {
          setLocalError(isName);
        }
      }
    }
    if (value.length > maxLength) {
      setLocalError(isMaxLength);
    } else {
      setLocalError((pre) => {
        if (pre === isMaxLength) return "";
        else return pre;
      });
    }
  }, [value]);

  useEffect(() => {
    setError(name, localError);
  }, [localError]);

  useEffect(() => {
    if (errorMsg === isRequired) {
      setLocalError(isRequired);
    }
  }, [errorMsg]);

  useEffect(() => {
    let flag = true;
    for (let i in validations) {
      if (validations[i] === isRequired && value === "") {
        setLocalError(unTouched);
        flag = false;
      }
    }
    if (flag) setLocalError("");
  }, []);

  return (
    <>
      {" "}
      <div
        className={`form-group text-left ${
          errorMsg && errorMsg !== unTouched ? "is-invalid" : ""
        } ${extraClassesWrapper}`}
      >
        <label
          className={`cust-input-lable ${
            errorMsg && errorMsg !== unTouched ? "text-danger" : ""
          }`}
        >
          {label}
        </label>
        <input
          onChange={(e) => {
            onChange(e.target.name, e.target.value, e);
          }}
          value={value}
          name={name}
          type={type}
          disabled={disabled}
          className={`form-control ${extraClasses} ${
            errorMsg && errorMsg !== unTouched ? "is-invalid" : ""
          }`}
          placeholder={placeholder}
        />

        <span
          className={`${
            errorMsg && errorMsg !== unTouched
              ? "text-danger"
              : "form-text text-muted"
          }`}
        >
          {errorMsg && errorMsg !== unTouched ? errorMsg : hintTxt}
        </span>
      </div>
    </>
  );
}

export default CustomTextFeild;
