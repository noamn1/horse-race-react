import React from 'react';

import '../App.css';
import HorseLane from './HorseLane';
import {myContext} from '../Context';
import { login } from '../lib/api';
import LoginForm from './LoginForm';

const numOfHorses = 2;

export class Race extends React.Component{
    constructor(props){
        super(props);

        this.doLogin = this.doLogin.bind(this);

        this.state = {
            screenWidth: window.innerWidth,
            stopRace: true,
            horses: new Array(numOfHorses + 1).fill(0),
            interval: null,
            winner: -1,
            showLogin: false,
            user: null

        }
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    getPosition = (horseId) =>{
        return this.state.horses[horseId];
    }

    toggleLogin = () =>{
        const show = !this.state.showLogin;
        return this.setState({showLogin: show});
    }

    async doLogin(email, password) {
        const user = await login(email, password);
        if(user) {
            this.setState({
                user: user.data, 
                showLogin:false});
        }

    }

    startRace = () =>{
        const interval = setInterval(()=>{
            
            const horses = [];
            let foundStop = false;
            let winner = 0;
            for(let i = 1; i<= numOfHorses; i++ ){
                const newPos = this.state.horses[i] + Math.floor(Math.random() *11);  
                if(newPos >= this.state.screenWidth) {
                    foundStop = true;
                    winner = i;
                    break;
                }
                horses[i] = newPos;
            }

            if(foundStop){
                clearInterval(this.state.interval);
                this.setState({stopRace: true, winner});
            }
            this.setState({horses});
        }, 70);

        this.setState({interval, stopRace: false});    
    }

    showStartButton = () => {
        return !this.state.showLogin && this.state.user && this.state.stopRace;
    }


    render(){
        const user = this.state.user? this.state.user.name: '';
        return (
            <myContext.Provider value={{getPosition: this.getPosition, stopRace: this.state.stopRace}}>
                {this.state.user && <div className="user">Hello {user}</div>}
                {!this.state.showLogin && !this.state.user && <div><button onClick={this.toggleLogin}>Login</button></div>}
                {this.showStartButton() && <div><button onClick={this.startRace}>Start</button></div>}
                 {this.state.showLogin && <div><LoginForm handleSubmit={this.doLogin}></LoginForm></div>}

                {this.state.stopRace && <div className="winner">The Winner: {this.state.winner}</div>}
                <div className="race">
                    <HorseLane horseId="1"></HorseLane>
                    <HorseLane horseId="2"></HorseLane>
                </div>
            </myContext.Provider>
        )
    }
}

export default Race;