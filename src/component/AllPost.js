import React from 'react';

const AllPost = (props) =>{
 

    return(
        props.hpData.map(post=>(
          <div key={post.id} className='post-container'>
            <h3>{post.title}</h3>
            <h4>{post.description}</h4>
            <img src={post.image_url} alt='' className='blog-pic'/>
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
