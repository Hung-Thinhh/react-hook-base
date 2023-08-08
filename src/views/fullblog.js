import { useParams, useNavigate   } from "react-router-dom"
import useFetch from '../customize/fetch.js';

const Fullblog = () => {
    const { id } = useParams()
    let navigate = useNavigate ()
    const { data: dataCovid, loading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(dataCovid)
    const handleback =() =>{
        navigate("/blog");
    }
    return (
        <>
            <div style={{ padding: '10px', border: '1px solid', marginBottom: '40px' }}><span onClick={handleback}>Back</span></div>
            <div style={{ width: '1000px', padding: '10px', border: '1px solid' }}>
                <div>{id} --- {loading === true ? 'Loading....' : dataCovid.title}</div>
                <div>
                    {dataCovid.body}
                </div>
            </div>
        </>
    )
}
export default Fullblog