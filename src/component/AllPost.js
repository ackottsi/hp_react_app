import React from 'react';
import { Link } from 'react-router-dom';
import '../AllPost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'


const AllPost = (props) =>{
 

    return(
        <div className='test-container'>
        {props.hpData.map(post=>(
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
                    <Button variant='secondary' onClick={()=>props.history.push(`/PostPage/${post.id}`)}>
                        More Info
                    </Button>
                </Card.Body>
            </Card>

          </div>
        ))}
    </div>

    )

}


export default AllPost;
