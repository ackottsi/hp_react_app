import './App.css';
import { Component } from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import AllPost from './component/AllPost'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      hpData:[],
      apiDataLoaded:false
     
    }
  }

  componentDidMount=async()=>{
    const response=await axios.get("https://hp-sample-blog.herokuapp.com/posts")
      console.log(response.data)

      const hpData=response.data;
    this.setState({
      hpData:hpData,
      apiDataLoaded:true
    })
  }


  render(){

         


      return (

      <div>
        {this.state.apiDataLoaded ?

          <div className="App">
            <Route exact path='/allposts' render={(routerProps)=>(
              <AllPost hpData={this.state.hpData} {...routerProps} />
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
