import './App.css';
import { Component } from 'react';
import axios from 'axios';

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
    this.setState({hpData:hpData})
  }


  render(){

          const hpData=this.state.hpData.map(res=>{
            return(
              <div>
                <h3>{res.title}</h3>
                <h4>{res.description}</h4>
                <img src={res.image_url} alt='' className='blog-pic'/>

              </div>
            )
          })


      return (
        <div className="App">
          {hpData}
        </div>
      );
  }
}

export default App;
