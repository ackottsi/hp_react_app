import React, {useState} from 'react';
import axios from 'axios'

const URL="https://hp-sample-blog.herokuapp.com"

const NewPost=(props)=>{
    const[state,setState]=useState({
        content_html:'',
        content_markdown:'',
        description:'',
        image_url:'',
        title:''
    })



    const handleChange=(e)=>{
        console.log(e.target)
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
            setState(data)
        }

    





    return(
    <div className="new-post-container">

        <form className="form-container" onSubmit={handleSubmit}>
            <input
                name='content_html'
                type='text'
                placeholder='content_html'
                value={state.content_html}
                onChange={handleChange}
            />
        </form>




    </div>
    )

}

export default NewPost