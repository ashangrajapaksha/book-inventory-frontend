import React, { useState } from "react";
import DataTable from "../../shared/dataTable/dataTable";
import FormModel from "../../shared/formModel/formModel";

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
