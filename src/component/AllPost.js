import React from 'react';
import { Link } from 'react-router-dom';
import '../AllPost.css'

const AllPost = (props) =>{
 

    return(
        props.hpData.map(post=>(
          <div key={post.id} className='post-container'>
           
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/PostPage/${post.id}`}>
            <img src={post.image_url} alt='' className='blog-pic'/>
            </Link>
          

            <button 
                className='delete-button' 
                id={post.id}
                onClick={()=>props.deletePost(post)}
            >
            Delete Post
            </button>
          </div>
        ))
    )

}


export default AllPost;
