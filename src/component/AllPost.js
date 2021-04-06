import React from 'react';

const AllPost = (props) =>{
    console.log(props)

    return(
        props.hpData.map(res=>(
          <div className='post-container'>
            <h3>{res.title}</h3>
            <h4>{res.description}</h4>
            <img src={res.image_url} alt='' className='blog-pic'/>
          </div>
        ))
    )

}


export default AllPost;
