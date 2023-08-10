import useFetch from '../customize/fetch.js';
import { useState, useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import './blog.scss'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CreateBlog from './createblog.js';

const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataCovid, loading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts')
    useEffect(() => {
        let data = dataCovid.slice(0, 12)
        setNewData(data)
    }, [dataCovid])
    const handleCreate = (blog) => {
        let data = newData
        data.unshift(blog)
        console.log(data)
        setShow(false)
        setNewData(data)
    }
    console.log(dataCovid)
    const deleBlog = (id) => {
        console.log(id)
        let data = newData
        data = data.filter(item => item.id !== id)
        setNewData(data)

    }

    return (
        <>

            <>
                <Button variant="primary" onClick={handleShow}>
                    Create Blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>-- Create blog --</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateBlog handleCreate={handleCreate} />
                    </Modal.Body>

                </Modal>
            </>

            <h3>List blogs</h3>
            <div style={{ padding: '10px', border: '1px solid', cursor: 'pointer' }} onClick={handleCreate}>Create blog +</div>
            <div className='main'>
                {isError === false && loading === false && dataCovid && dataCovid.length > 0 && newData.map(item => {

                    if (item.hospitalized !== null) {

                        return (
                            <div className='blog' key={item.id}>
                                <div className='title'>Title: {item.title}</div>
                                <br></br>
                                <div className='body'>{item.body}</div>
                                <br></br>
                                <button className='more_btn'>
                                    <NavLink to={`/blog/${item.id}`} end>More</NavLink>
                                </button>
                                <div style={{float: 'right'}} onClick={() => deleBlog(item.id)}>X</div>
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



