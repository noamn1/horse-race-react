import React, { useContext, useState } from 'react';

import '../App.css';
import { myContext } from '../Context';

export class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        
        }
    }

    handleSubmit = ()=>{
        this.props.handleSubmit(this.state.email, this.state.password);
    }

    render(){
        return (
            <div>
                <p>Login</p>
                
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={e => this.setState({email:e.target.value})}/> 
                        
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={e => this.setState({password:e.target.value})}/>
                        <button  onClick={this.handleSubmit} >Login</button>
          
            </div>
            )
    }
}


export default LoginForm;