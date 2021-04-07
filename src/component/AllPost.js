import React from 'react';

const AllPost = (props) =>{
 

    return(
        props.hpData.map(res=>(
          <div key={props.hpData.id} className='post-container'>
            <h3>{res.title}</h3>
            <h4>{res.description}</h4>
            <img src={res.image_url} alt='' className='blog-pic'/>
           
          </div>
        ))
    )

}


export default AllPost;
