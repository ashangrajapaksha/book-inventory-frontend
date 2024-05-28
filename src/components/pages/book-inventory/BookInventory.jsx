import React, { useState } from "react";
import DataTable from "../../shared/dataTable/dataTable";
import FormModel from "../../shared/formModel/formModel";
import SearchBook from "../../shared/serachBook/SearchBook";
import Button from "@mui/material/Button";

function BookInventory() {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  const fetchSearchResults = async (query) => {
    setSearchValue(query);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="background">
      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-2">
          <div className="search-wrap">
            <SearchBook onSearch={fetchSearchResults} />
          </div>
          <div className="d-flex justify-content-end book-add-btn">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpen(true)}
            >
              Add Book
            </Button>
          </div>{" "}
          <div className="d-flex justify-content-end w-100">
            <FormModel />
          </div>
        </div>
        <div>
          <DataTable searchValue={searchValue} />
        </div>
      </div>
      <FormModel open={open} handleClose={handleClose} />
    </div>
  );
}

export default BookInventory;
