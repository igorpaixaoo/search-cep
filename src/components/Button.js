import React from "react";

const Button = (props) =>{
    const {onClick, id, text} = props;
    return(
        <button onClick={onClick} id={id}>{text}</button>
    )
}

export default Button;