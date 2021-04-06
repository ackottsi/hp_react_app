import React from 'react';

const PostPage=(props)=>{
    const foundPost=props.hpData.find(post=>{
        return post.id===parseInt(props.match.params.id)

    })
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



