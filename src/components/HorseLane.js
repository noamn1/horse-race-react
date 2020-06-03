import React from 'react';
import Horse from './Horse';
import '../App.css';


export class HorseLane extends React.Component{

    render(){
        return (<div className="horse-lane"><Horse horseId={this.props.horseId}></Horse></div>)
    }
}

export default HorseLane;