import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {

        const ourRequest = axios.CancelToken.source() // <-- 1st step



        // let data = getData() && getData().data ? getData().data : [];
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                });
                let data = (res && res.data) ? res.data : [];

                setData(data);
                setLoading(false);
                setIsError(false);

            }

            catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Previous request canceled, new request is send', e.message);
                } else {
                    // handle error
                    setLoading(false)
                    setIsError(true)
                }
            }


        }
        setTimeout(() => {
            fetchData()
        }, 1000)

        return () => {
            ourRequest.cancel('error') // <-- 3rd step
        }

    }, [url]);
    return { data, loading, isError }
}
export default useFetch;