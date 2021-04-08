import './App.css';
import { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AllPost from './component/AllPost'
import PostPage from './component/PostPage';
import NewPost from './component/NewPost';





const URL="https://hp-sample-blog.herokuapp.com"

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      hpData:[],
      apiDataLoaded:false
     
    }
  }

  componentDidMount=async()=>{
    this.getAllPosts();    
  }



  getAllPosts=async()=>{
    const response=await axios.get(`${URL}/posts`)
    console.log(response)
    const hpData=response.data;
    this.setState({
      hpData:hpData,
      apiDataLoaded:true
    })
}



  getOnePost=async()=>{
    const response=await axios.get(`${URL}/posts/${this.state.postId}`)
  }


  deletePost=async(post)=>{
    await axios.delete(`${URL}/posts/${post.id}`)
    const hpData=this.state.hpData.filter(item=>item.id!==post.id);
    this.setState({hpData})
  }




  render(){

      return (

      <div>
        {this.state.apiDataLoaded ?

          <div className="App">
            <Route exact path='/' render={(routerProps)=>(
              <AllPost hpData={this.state.hpData} deletePost={this.deletePost} {...routerProps} />
            )}/> 

            <Route exact path="/PostPage/:id" render={(routerProps)=>(
              <PostPage hpData={this.state.hpData} getAllPosts={this.getAllPosts} {...routerProps}/>
            )}/>

            <Route exact path="/NewPost" render={(routerProps)=>(
              <NewPost hpData={this.state.hpData} getAllPosts={this.getAllPosts} {...routerProps}/>
            )}/>



          </div>
        
        :
          <p>data not loaded</p>
        }

      </div>

      );
  }
}

export default App;
