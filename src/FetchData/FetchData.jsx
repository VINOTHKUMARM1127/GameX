import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = ({ url, id }) => {
  const key = "098638bca6df40e98079f1f85ddcc3c1";
  const baseUrl = 'https://api.rawg.io/api';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const apiUrl = id ? `${baseUrl}${url}?key=${key}${id}` : `${baseUrl}${url}?key=${key}`;
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [url, id]);  // Make sure the effect depends on both `url` and `id`

  return { data, loading };
};

export default FetchData;
