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

    const handleEdit=async(e)=>{
        console.log("button pressed")
        e.preventDefault();
            const data={
                description:state.description,
                image_url:state.image_url,
                title:state.title
            }
            setState({editPost:!state.editPost})
    }



//    console.log(foundPost)
     

    if(state.editPost===false){
            return(
                    <div>
                        {console.log(state.editPost)}
                        {foundPost ? 

                            <div className="post-detail-conatiner">
                                <h3>{foundPost.title}</h3>
                                <h4>{foundPost.description}</h4>
                                <img src={foundPost.image_url} alt='' className='blog-pic'/>   
                                <form onSubmit={handleEdit}>
                                <input className="edit-button" type='submit' name='' value='edit'/>
                                </form>

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
                editPost State True
                <form className="edit-form-container" onSubmit={handleEdit}>
                 

                    <input
                        name='description'
                        type='text'
                        placeholder='description'
                        value={state.description}
                        defaultValue={foundPost.description}
                        onChange={handleChange}
                    />

                    <input
                        name='image_url'
                        type='text'
                        placeholder='image_url'
                        value={state.image_url}
                        defaultValue={foundPost.image_url}
                        onChange={handleChange}
                    />

                    <input
                        name='title'
                        type='text'
                        placeholder='title'
                        value={state.title}
                        defaultValue={foundPost.title}
                        onChange={handleChange}
                    />

                    <input className="edit-button" type='submit' name='' value='Submit Change'/>

                </form>
            </div>
        )

    }
}

export default PostPage



