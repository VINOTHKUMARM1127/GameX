import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = (url) => {
    const key = "098638bca6df40e98079f1f85ddcc3c1";
    const baseUrl = 'https://api.rawg.io/api';
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseUrl}${url}?key=${key}`);
                setData(response.data);
            } catch (err) {
                console.log("error",err)
            } finally {
                setLoading(false);
            }
        };

        fetchDataFromApi();
    }, [url]);

    return { data, loading };
};

export default FetchData;
