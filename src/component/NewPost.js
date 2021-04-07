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






    return(
    <div>NewPost test</div>
    )

}

export default NewPost