import './App.css';
import { Component } from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import AllPost from './component/AllPost'
import PostPage from './component/PostPage';





const URL="https://hp-sample-blog.herokuapp.com"

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      hpData:[],
      postId:'',
      apiDataLoaded:false
     
    }
  }

  componentDidMount=async()=>{
    const response=await axios.get(`${URL}/posts`)
      console.log(response.data)

      const hpData=response.data;
    this.setState({
      hpData:hpData,
      apiDataLoaded:true
    })
  }


  getOnePost=async()=>{
    const response=await axios.get(`${URL}/posts/${this.state.postId}`)
  }




  render(){

      return (

      <div>
        {this.state.apiDataLoaded ?

          <div className="App">
            <Route exact path='/allposts' render={(routerProps)=>(
              <AllPost hpData={this.state.hpData} {...routerProps} />
            )}/> 

            <Route exact path="/PostPage/:id" render={(routerProps)=>(
              <PostPage hpData={this.state.hpData} {...routerProps}/>
            )}/>

            <Route exact path="/NewPost" render={(routerProps)=>(
              <NewPost hpData={this.state.hpData} {...routerProps}/>
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
