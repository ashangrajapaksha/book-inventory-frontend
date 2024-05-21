import React, { useState } from "react";
import CustomSearchInput from "../../common/forms/customSearchInput";

function SearchBook({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchValue = () => {
    onSearch(searchValue);
  };

  return (
    <div className="d-flex gap-1">
      <CustomSearchInput
        label="Search"
        className="cust-input"
        placeholder="Search value"
        type="text"
        name="search"
        onChange={handleChange}
        value={searchValue}
      />
      <button className="btn btn-sm btn-primary" onClick={handleSearchValue}>
        Search
      </button>
    </div>
  );
}

export default SearchBook;
