import React from 'react';
import './Button.css';
function Button(props)
{
    return(
        <button className="input1" type= {props.text} >{props.tittle}</button>
    )
}
export default Button;
