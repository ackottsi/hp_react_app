import React, {useState} from 'react';
import axios from 'axios'

const URL="https://hp-sample-blog.herokuapp.com"

const NewPost=(props)=>{
    const[state,setState]=useState({
        content_html:'',
        content_markdown:'',
        created_at:'',
        description:'',
        image_url:'',
        title:'',
        updated_at:'',
        url:'',
    })
}


export default NewPost