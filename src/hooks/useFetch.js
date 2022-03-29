import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios.get(url).then((res) => {
            setData(res.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(true);
            setLoading(false);
        })
    }, [url]);

    return {data, loading, error}

}