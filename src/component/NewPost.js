import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import '../NewPost.css'
import axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize'
import {Card, Button} from 'react-bootstrap';

const URL="https://hp-sample-blog.herokuapp.com"

const NewPost=(props)=>{
    const[state,setState]=useState({
        description:'',
        image_url:'',
        title:''
    })


    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,
            [name]:value
        }));
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
            const data={
                content_html:state.content_html,
                content_markdown:state.content_markdown,
                description:state.description,
                image_url:state.image_url,
                title:state.title
            }
            setState(data);

            const res=await axios.post(`${URL}/posts`, data)
            props.getAllPosts()
            props.history.push('/')
    }

    


    return(
    <div className="new-post-container">

        <form className="form-container" onSubmit={handleSubmit}>
            {/* <input
                name='content_html'
                type='text'
                placeholder='content_html'
                value={state.content_html}
                onChange={handleChange}
            />

            <input
                name='content_markdown'
                type='text'
                placeholder='content_markdown'
                value={state.content_markdown}
                onChange={handleChange}
            /> */}

            Title:
             <input
                name='title'
                type='text'
                placeholder='title'
                value={state.title}
                onChange={handleChange}
            />

            Description:
            <TextareaAutosize
                name='description'
                placeholder='description'
                value={state.description}
                className='textarea-new-post'
                onChange={handleChange}
                />

            Image_url:
            <input
                name='image_url'
                type='text'
                placeholder='image_url'
                value={state.image_url}
                onChange={handleChange}
            />

    
            <Button type='submit' variant="secondary" className='submit-post-btn'>Submit Post</Button>

       </form>

    </div>
    )

}

export default withRouter(NewPost)