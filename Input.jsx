import React from "react";
import "./Input.css";
function Input(props)
{
    return <input className="input" type= {props.text}  placeholder={props.placeholder} />
    

}
export default Input;