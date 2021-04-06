import React from 'react';

const PostPage=(props)=>{
    const foundPost=props.hpData.find(post=>{
        return post.id===parseInt(props.match.params.id)

    })
   console.log(props)


   return(
        <div>
            {foundPost ? 
                <div className="post-detail-conatiner">
                    post found
                </div>
                
                
            :        
            <p>no post found</p>
            }   
            
        </div>       
   )
}

export default PostPage



