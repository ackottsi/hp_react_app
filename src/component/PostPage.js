import React, {useState} from 'react';
import axios from 'axios';



const PostPage=(props)=>{
    const foundPost=props.hpData.find(post=>{
        return post.id===parseInt(props.match.params.id)

    })

    const[state,setState]=useState({
        description:'',
        image_url:'',
        title:'',
        editPost:false
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
        console.log("button pressed")
        e.preventDefault();
            const data={
                description:state.description,
                image_url:state.image_url,
                title:state.title
            }
            
    }



   console.log(foundPost)


   return(
        <div>
            {foundPost ? 

                <div className="post-detail-conatiner">
                    <h3>{foundPost.title}</h3>
                    <h4>{foundPost.description}</h4>
                    <img src={foundPost.image_url} alt='' className='blog-pic'/>                      
                </div>
                    
            :       

            <p>no post found</p>

            }   
            
        </div>       
   )
}

export default PostPage



