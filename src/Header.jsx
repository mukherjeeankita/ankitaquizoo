import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const Header =()=>{
    return (
        <>
        <div className="header">
<NavLink to="/" className="title">
    Quizoo
    
    
</NavLink>
</div>
</>
)
}

export default Header;