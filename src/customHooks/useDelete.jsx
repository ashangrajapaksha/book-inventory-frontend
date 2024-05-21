import { useState, useCallback } from "react";
import axios from "axios";

const useDelete = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const deleteBook = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const response = await axios.delete(`${url}/${id}`);
        setResponse(response.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { deleteBook, loading, error };
};

export default useDelete;
