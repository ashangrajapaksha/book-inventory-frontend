import React, { useState } from "react";
import DataTable from "../../shared/dataTable/dataTable";
import FormModel from "../../shared/formModel/formModel";
import SearchBook from "../../shared/serachBook/SearchBook";

function BookInventory() {
  const [searchValue, setSearchValue] = useState("");
  const fetchSearchResults = async (query) => {
    setSearchValue(query);
  };

  return (
    <div className="background">
      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-2">
          <div className="search-wrap">
            <SearchBook onSearch={fetchSearchResults} />
          </div>
          <div className="d-flex justify-content-end w-100">
            <FormModel />
          </div>
        </div>
        <div>
          <DataTable searchValue={searchValue} />
        </div>
      </div>
    </div>
  );
}

export default BookInventory;
