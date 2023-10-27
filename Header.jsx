import React from "react";
import './Header.css';
import Button from './Button';
import Input from './Input';
function Header(props)
{
   return(
    <div className = "header">
   <h1 className="header1">{props.text} </h1>
    <Input type = "text" placeholder = "Search"/> 
     <Button type = "button" tittle="Post"/>
     <Button type = "button" tittle = "Login"/> 
     </div> 

        
   );

}

export default Header