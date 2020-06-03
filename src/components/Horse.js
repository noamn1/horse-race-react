import React, { useContext } from 'react';

import '../App.css';
import { myContext } from '../Context';

export const Horse = (props)=>{

const context = useContext(myContext);
const xPos = context.stopRace ? 0: context.getPosition(props.horseId);
    
return (<div className="horse" style={{left: xPos + 'px'}}>{props.horseId}</div>)
    
}

export default Horse;