import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Scholify</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
      
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/signup">Registration</a>
        <a href="/scholarship">Scholarship</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;














/*import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Navbar=()=>{
  return(
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Registration</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/scholarship">Scholarship</a>
      </li>

      
      
      
    </ul>
  </div>
</nav> 






    </>
  )
}
export default Navbar;*/

