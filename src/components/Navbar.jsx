import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle'
import { NavigationContext} from "../context/NavigationContext";
import { FormPopUpContext } from "../context/FormPopUpContext";
 
 
export const Navbar = () => {

  const {currPage,setPage}=useContext(NavigationContext);
  const {setShowContactForm}=useContext(FormPopUpContext);

  const [navBarCollapse,setCollapse]=useState('');

  // console.log(currPage);
 
 
  
  return (
    <header className="navigation-header">
      <nav className="navbar navbar-expand-md navbar-dark px-3">
        <div className="navbar-brand logo" >San</div>
        <button className="navbar-toggler" type="button" data-bs-toggler="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{setCollapse(!navBarCollapse)}}>
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className={navBarCollapse?"navbar-collapse justify-content-end mynav":"collapse navbar-collapse justify-content-end mynav"}  >
             <Link to='/' className="nav-item nav-link px-lg-3 px-xl-5 my-nav-link" onClick={()=>{setPage("Home");setCollapse(!navBarCollapse)}}>Home</Link>
             <Link to='/Education' className="nav-item nav-link px-lg-3 px-xl-5 my-nav-link"  onClick={()=>{setPage("Education");setCollapse(!navBarCollapse)}}>Education</Link>
             <Link to='/MyWork' className="nav-item nav-link px-lg-3 px-xl-5 my-nav-link"  onClick={()=>{setPage("MyWork");setCollapse(!navBarCollapse)}}>My Work</Link>
             <Link to='/ContactMe' className="nav-item nav-link px-lg-3 px-xl-5 my-nav-link"  onClick={()=>{setPage("ContactMe");setCollapse(!navBarCollapse);setShowContactForm(true)}}>Contact Me</Link>
        </div>
        <hr />
      </nav>
    </header>
  );
};
