import React, { useEffect } from "react";
import useFetch from "../../customHooks/useFetch";

function DataTable() {
  const url = "http://localhost:3000/bookInventry?page=1&limit=5";
  const { data, loading, error } = useFetch(url);

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
          {data.books.map((book) => (
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
    </div>
  );
}

export default DataTable;
