// src/hooks/usePaginatedFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const usePaginatedFetch = (url, page, limit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        params: { page, limit },
      });
      setData(response.data.books);
      setTotalPages(response.data.totalPages);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, page, limit]);

  const refetchData = () => {
    fetchData();
  };

  return { data, loading, error, totalPages, refetchData };
};

export default usePaginatedFetch;
