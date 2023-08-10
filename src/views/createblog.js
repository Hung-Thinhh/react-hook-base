import './createblog.scss'
import { useState } from 'react';


const CreateBlog = (props) => {
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleContent = (event) => {
        setContent(event.target.value)
    }
    const handleBtn = () => {
        if (!title) {
            alert('Plase enter a title')
            return;
        }
        if (!content) {
            alert('Please enter a content')
            return;

        }
        console.log('title:' + title, 'content:' + content)
        let newBlog = {
            title: title,
            body: content,
            userId: 1,
            id:0
        }
        props.handleCreate(newBlog)
    }
    return (
        <>
            <div className="main" >
                <div className="title" >
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(event) => handleTitle(event)}></input>
                </div>
                <div className="content">
                    <label>Content:</label>
                    <input type="text" value={content} onChange={(event) => handleContent(event)}></input>
                </div>
                <div>
                    <button onClick={handleBtn}>Submid</button>
                </div>
            </div>
        </>
    )
}
export default CreateBlog