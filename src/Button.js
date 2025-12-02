import React from "react";
import './App.css';   // keep global styles if needed

// Functional Button component
const Button = (props) => {
    return (
        <button 
            className="ButtonStyle" 
            value={props.label}  
            onClick={props.ClickHandle}>
            {props.label}
        </button>
    );
}

export default Button;
