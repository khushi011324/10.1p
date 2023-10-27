import React from "react";
import "./InputNew.css";

function InputNew(props) {
    return <input className="input-new" type={props.type} placeholder={props.placeholder} />
}

export default InputNew;