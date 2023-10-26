import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext} from "../context/NavigationContext";
 
 
export const Navbar = () => {

  const {currPage,setPage}=useContext(NavigationContext);

  console.log(currPage);
 
 
  
  return (
    <header className="navigation-header">
      <nav className="navbar navbar-expand-md navbar-dark px-3">
        <div className="navbar-brand logo">San</div>
        <button className="navbar-toggler"  data-toggle="collapse" data-target="mynav">
        <i className="fa-solid fa-bars" style={{color:'#ffffff',fontSize:"1.5em"}}></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id='mynav'>
             <Link to='/' className="nav-item nav-link px-lg-3 px-xl-5" onClick={()=>{setPage("Home")}}>Home</Link>
             <Link to='/Education' className="nav-item nav-link px-lg-3 px-xl-5"  onClick={()=>{setPage("Education")}}>Education</Link>
             <Link to='/MyWork' className="nav-item nav-link px-lg-3 px-xl-5"  onClick={()=>{setPage("MyWork")}}>My Work</Link>
             <Link to='/ContactMe' className="nav-item nav-link px-lg-3 px-xl-5"  onClick={()=>{setPage("ContactMe")}}>Contact Me</Link>
        </div>
      
      </nav>
    </header>
  );
};
