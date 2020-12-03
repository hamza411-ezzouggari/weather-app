import React from 'react';
import pic from './img4.jpg';

class Imaged extends React.Component{
render(){
    return(
        <div className="Img">
            <img className="img" src={pic} alt="Logo" />
        </div>
    )
}
}
export default Imaged