import React from 'react';
import devIcon from "../../devicon.jpg";
import "./Logo.css";

const logo = () => {
  return (
    <div className='logo-div ma3 mt0'>
        <img className="logo" src={ devIcon } alt="logo" />
    </div>
  )
}

export default logo;