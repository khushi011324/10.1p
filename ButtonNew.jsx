import React from 'react';
import './ButtonNew.css';

function ButtonNew(props) {
    return (
        <button className="button-new" type={props.type}>{props.title}</button>
    )
}

export default ButtonNew;