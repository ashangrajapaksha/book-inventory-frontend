// src/hooks/usePaginatedFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const usePaginatedFetch = (url, page, limit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          params: { page, limit },
        });
        console.log(response.data);
        setData(response.data.books);
        setTotalPages(response.data.totalPages);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page, limit]);

  return { data, loading, error, totalPages };
};

export default usePaginatedFetch;
