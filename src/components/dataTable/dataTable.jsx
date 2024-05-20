import React, { useEffect, useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Pagination from "react-bootstrap/Pagination";
import { Dropdown } from "react-bootstrap";

function DataTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const numbers = Array.from({ length: 5 }, (_, i) => (i + 1) * 5);

  const url = "http://localhost:3000/bookInventry/";

  const { data, loading, error, totalPages } = useFetch(url, page, limit);
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const handleSelect = (number) => {
    setLimit(number);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book) => (
            <tr>
              <th scope="row">{book.title}</th>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>$ {book.price}</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex gap-2">
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            {limit !== null ? `${limit}` : ""}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {numbers.map((number) => (
              <Dropdown.Item key={number} onClick={() => handleSelect(number)}>
                {number}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Pagination className="px-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === page}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
}

export default DataTable;
