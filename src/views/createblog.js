import './createblog.scss'
import { useState } from 'react';


const CreateBlog = () => {
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleContent = (event) => {
        setContent(event.target.value)
    }
    const handleBtn = () => {

        console.log(title,content)
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