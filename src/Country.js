import React from 'react';
import './App.css';
class Country  extends React.Component {
    state={
        Country:'',
    }
    handleChange=(e)=>{ 
        this.setState({Country:e.target.value})
        }
        handleKeyPress=(event)=>{
            var co=this.state.Country
        if(event.key === "Enter"){
            this.props.onAdd(co)
        }
    }
    render(){
        return(
            <div className="container">
            <input autoComplete="off" type="text" onKeyPress={this.handleKeyPress}  placeholder="Search..." value={this.state.Country} onChange={this.handleChange} />
                <div className="search"></div>
            </div>
        );
    }
}
export default Country