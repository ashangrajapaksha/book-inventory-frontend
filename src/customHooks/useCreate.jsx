// src/hooks/useCreate.js
import { useState, useCallback } from "react";
import axios from "axios";

const useCreate = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const saveData = useCallback(
    async (formData) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(url, formData);
        setResponse(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { saveData, loading, error, response };
};

export default useCreate;
