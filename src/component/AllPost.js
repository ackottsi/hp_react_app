import React from 'react';
import { Link } from 'react-router-dom';
import '../AllPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'


const AllPost = (props) =>{
 

    return(
        
        props.hpData.map(post=>(
          <div key={post.id} className='post-container'>
           <Card style={{ width: '18rem' }}>
                <Link to={`/PostPage/${post.id}`}>
                    <Card.Img variant="top" src={post.image_url} />
                </Link>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    {post.description}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>props.deletePost(post)}>
                        Delete Post
                    </Button>
                </Card.Body>
            </Card>

            {/* <h2>{post.title}</h2>
            <p>{post.description}</p>
         
            <img src={post.image_url} alt='' className='blog-pic'/>
           
           */}

            {/* <button 
                className='delete-button' 
                id={post.id}
                onClick={()=>props.deletePost(post)}
            >
            Delete Post
            </button> */}
          </div>
        ))

    )

}


export default AllPost;
