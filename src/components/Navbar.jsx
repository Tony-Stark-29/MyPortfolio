import React from "react";
import { Link } from "react-router-dom";
 
export const Navbar = () => {
  return (
    <header className="navigation-header">
      <nav className="navbar navbar-expand-md navbar-dark px-3">
        <div className="navbar-brand logo">San</div>
        <button className="navbar-toggler"  data-toggle="collapse" data-target="mynav">
        <i className="fa-solid fa-bars" style={{color:'#ffffff',fontSize:"1.5em"}}></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id='mynav'>
             <Link to='/' className="nav-item nav-link px-lg-3 px-xl-5 ">Home</Link>
             <Link to='/Education' className="nav-item nav-link px-lg-3 px-xl-5">Education</Link>
             <Link to='/MyWork' className="nav-item nav-link px-lg-3 px-xl-5">My Work</Link>
             <Link to='/AboutMe' className="nav-item nav-link px-lg-3 px-xl-5">About Me</Link>
        </div>
        <hr />
      </nav>
    </header>
  );
};
