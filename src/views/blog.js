import useFetch from '../customize/fetch.js';
import { NavLink,useNavigate } from 'react-router-dom';
import './blog.scss'


const Blog = () => {


    const { data: dataCovid, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts')
    let navigate = useNavigate ()
    const handleCreate =() =>{
        navigate("/createblog");
    }
    console.log(dataCovid)

    const data = dataCovid.slice(0,12)
    return (
        <>
            <h3>List blogs</h3>
            <div style={{ padding: '10px', border: '1px solid' ,cursor:'pointer'}} onClick={handleCreate}>Create blog +</div>
            <div className='main'>
                {isError === false && loading === false && dataCovid && dataCovid.length > 0 && data.map(item => {

                    if (item.hospitalized !== null) {

                        return (
                            <div className='blog' key= {item.id}>
                                <div className='title'>Title: {item.title}</div>
                                <br></br>
                                <div className='body'>{item.body}</div>
                                <br></br>
                                <button className='more_btn'>
                                    <NavLink to={`/blog/${item.id}`} end>More</NavLink>
                                </button>
                            </div>
                        )
                    }


                })}
                {loading === true &&
                   
                        <div colSpan='5' style={{ 'textAlign': 'center' }}>Loading....</div>
                    
                }
                {isError === true &&
                    
                        <div colSpan='5' style={{ 'textAlign': 'center' }}>Something wrong...</div>
                    
                }
            </div>

        </>
    )
}
export default Blog;