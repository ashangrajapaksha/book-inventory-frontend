import React, { useState } from "react";
import DataTable from "../../components/dataTable/dataTable";
import "./BookInventory.scss";
import Button from "@mui/material/Button";
import Input from "../../components/customTextFeild/customTextFeild";
import FormModel from "../../components/formModel/formModel";

function BookInventory() {
  return (
    <div className="background">
      <div className="d-flex flex-column gap-5">
        <div className="search-wrap">seatch</div>
        <div className="d-flex justify-content-end w-100">
          <FormModel />
        </div>
        <div>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default BookInventory;
