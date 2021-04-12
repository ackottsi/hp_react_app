import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import '../NewPost.css'
import axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize'

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
             <input
                name='title'
                type='text'
                placeholder='title'
                value={state.title}
                onChange={handleChange}
            />

            <TextareaAutosize
                name='description'
                placeholder='description'
                value={state.description}
                className='textarea-new-post'
                onChange={handleChange}

                />

            {/* <input
                name='description'
                type='textarea'
                placeholder='description'
                value={state.description}
                onChange={handleChange}
            /> */}

            <input
                name='image_url'
                type='text'
                placeholder='image_url'
                value={state.image_url}
                onChange={handleChange}
            />

           

            <input className="new-post" type='submit' value='New Post' />

       </form>

    </div>
    )

}

export default withRouter(NewPost)