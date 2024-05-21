import React, { useEffect, useState } from "react";
import usePaginatedFetch from "../../../customHooks/usePaginatedFetch";
import useDelete from "../../../customHooks/useDelete";
import Pagination from "react-bootstrap/Pagination";
import { Dropdown } from "react-bootstrap";

function DataTable({ searchValue }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const numbers = Array.from({ length: 5 }, (_, i) => (i + 1) * 5);

  const url = "http://localhost:3000/bookInventry/";

  useEffect(() => {
    if (searchValue) {
    }
  }, [searchValue]);

  const {
    data,
    loading: fetchLoading,
    error: fetchError,
    totalPages,
    refetchData,
  } = usePaginatedFetch(url, page, limit);

  // Using useDelete hook
  const {
    deleteBook,
    loading: deleteLoading,
    error: deleteError,
  } = useDelete(url);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSelect = (number) => {
    setLimit(number);
  };

  if (deleteLoading)
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  if (deleteError) return <div>Error: {deleteError.message}</div>;

  if (fetchLoading)
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  if (fetchError) return <div>Error: {fetchError.message}</div>;

  const editBook = () => {};

  const handleDelete = (id) => {
    deleteBook(id, () => {
      refetchData();
    });
  };

  return (
    <div className="table-wrap">
      <table className="table table-hover table-striped">
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
          {data.map((book, index) => (
            <tr key={index}>
              <th scope="row">{book.title}</th>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>$ {book.price}</td>
              <td>
                <div className="d-flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                    onClick={editBook}
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-archive-fill"
                    viewBox="0 0 16 16"
                    onClick={() => handleDelete(book._id)}
                  >
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                  </svg>
                </div>
              </td>
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
