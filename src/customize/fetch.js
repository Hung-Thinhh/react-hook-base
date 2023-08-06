import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        try {


            // let data = getData() && getData().data ? getData().data : [];
            async function fetchData() {

                let res = await axios.get(url);
                let data = (res && res.data) ? res.data : [];

                setData(data);
                setLoading(false);
                setIsError(false);

            }

            // Gọi hàm fetchData() để lấy dữ liệu từ API
            fetchData();
        } catch (e) {
            setLoading(false)
            setIsError(true)
        }

    }, []);
    return {data, loading, isError}
}
export default useFetch;