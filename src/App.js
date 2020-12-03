import React from 'react';
import Country from './Country';
import Result from './Result';
import GetValue from './GetValue';
import Total from './Total';
import RingLoader from "react-spinners/RingLoader";
import './App.css';


class App extends React.Component{
  state={
    Countries:null,
    error:null,
    loading:true,
    data:null,
  }
  async componentDidMount(){
    let d = await GetValue('');
    if(d===null){
      this.setState({error:true,loading:false})
    } else{
      this.setState({loading:false,data:d})
    }
    console.log(d)
  }
  onAdd = async (c)=>{
    let d= await GetValue(c);
    if(d===null){
      this.setState({error:true,loading:false});
    }else{
      this.setState({loading:false,data:d})
    }
  }
  render(){
    const {error,loading,Countries,data} = this.state;
    if(error){
      return (
      <div className="error">
        <h1 className="ou"> Oups ! </h1> 
        <p className="there"> There was an error, try again!!!</p>  
      </div>
      )
    }
    if(loading){
      return (
        <div className="sweet-loading">
          <h1>loading...</h1>
        <RingLoader
          size={150}
          color={"rgb(199, 15, 159);"}
          loading={this.state.loading}
          />
          </div>
      )
    }
    return(
      <div className="App">
        <Country ad={Countries} onAdd={this.onAdd}/>
        <Result data={data}/>
        <Total />
      </div>
      
    );
  }
}
export default App;
