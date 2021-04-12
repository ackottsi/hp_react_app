import React, {useState} from 'react';
import axios from 'axios';
import '../PostPage.css'
import {withRouter} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize'

const URL="https://hp-sample-blog.herokuapp.com"


const PostPage=(props)=>{
    const foundPost=props.hpData.find(post=>{
        return post.id===parseInt(props.match.params.id)

    })

    const[state,setState]=useState({
        description:foundPost.description,
        image_url:foundPost.image_url,
        title:foundPost.title,
        editPost:false
    })


    console.log(state.description)

    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setState(prevState=>({
            ...prevState,
            [name]:value
        }));
    }

    const handleEdit=async(e)=>{
        e.preventDefault();
            const data={
                description:state.description,
                image_url:state.image_url,
                title:state.title
            }
            const res=await axios.put(`${URL}/posts/${foundPost.id}`,data)
            console.log(res)
            const updatedData=res.data
            setState({editPost:!state.editPost, 
                    description:updatedData.description,
                    image_url:updatedData.image_url,
                    title:updatedData.title
            })
            props.getAllPosts();
           
    }  

    if(state.editPost===false){
            return(
                    <div>
                        {console.log(state.editPost)}
                        {foundPost ? 

                            <div className="post-detail-conatiner">
                                <Card>
                                    <Card.Img variant="top" src={foundPost.image_url}  />
                                    <Card.Body>
                                        <Card.Title>{foundPost.title}</Card.Title>
                                        <Card.Text>
                                        {foundPost.description}
                                        </Card.Text>
                                        <Button onClick={handleEdit} variant="secondary">Edit</Button>
                                        <Button onClick={()=>props.deletePost(foundPost)} variant="secondary">Delete</Button>
                                    </Card.Body>
                                    </Card>
                              
                            </div>
                                
                        :       

                        <p>no post found</p>

                        }   
                        
                    </div>       
                )
        }       
    
    else if (state.editPost===true){
        return(
            <div className="post-detail-container">
             
                <form className="edit-form-container" onSubmit={handleEdit}>
                 
                
                    Title:
                    <input
                        name='title'
                        type='text'
                        placeholder='title'
                        value={state.title}
                        onChange={handleChange}
                    />

                    Description:
                    <TextareaAutosize
                        name='description'
                        placeholder='description'
                        value={state.description}
                        className='textarea-new-post'
                        onChange={handleChange}
                    />


                    Image_url:
                    <input
                        name='image_url'
                        type='text'
                        placeholder='image_url'
                        value={state.image_url}
                        onChange={handleChange}
                    />

                   <Button type='submit' variant="secondary" className='edit-submit-btn'>Submit Change</Button>
                </form>
            </div>
        )

    }
}

export default withRouter(PostPage)






{/* <h3>{foundPost.title}</h3>
<h4>{foundPost.description}</h4>
<img src={foundPost.image_url} alt='' className='blog-pic'/>   
<form onSubmit={handleEdit}>
<input className="edit-button" type='submit' name='' value='edit'/>
</form> */}
