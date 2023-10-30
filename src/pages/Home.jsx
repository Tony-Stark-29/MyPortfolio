import React from "react";
import home from "../css/Home.module.css";
 
import linkedIn_logo from "../resources/icons/linked_in.svg";
import gitHub_logo from "../resources/icons/github.svg";
import resume_logo from "../resources/icons/user_circle_male_avatar.svg";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
 export const Home = () => {
 
  return (
    < div className={home.container}>
      <Navbar></Navbar>
      <div className={home.overlay_left}></div>
      <div className={home.content}>
          <div className={`col-lg-12 ${home.container_left}`}>
            <div className=" ">
              <h2 className={home.name}>Santhosh Kumar</h2>
              <h6>MCA Graduate</h6>
            </div>
            <div className={home.link_img_container}>
              <Link to="https://in.linkedin.com/" target="_blank"><img src={linkedIn_logo} alt="Github" /></Link>
              
              <img src={gitHub_logo} alt="Linked In" />
              <img src={resume_logo} alt="Resume" />
            </div>
          </div>
          <div className={`col-lg-12 ${home.container_right}`}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello there! I'm a
              passionate MCA graduate on the lookout for exciting opportunities
              in the realm of software development. With a keen eye for
              innovative solutions and a knack for problem-solving, I'm particularly drawn to the dynamic world of web development. My
              skill set includes mastery in HTML, CSS, JavaScript, React.js, and
              Node.js, allowing me to craft seamless and visually captivating
              web experiences. The art of transforming ideas into functional,
              user-friendly websites fuels my drive to continually enhance and
              innovate. I'm thrilled to dive into challenging projects that let
              me harness my skills and contribute to building remarkable digital
              landscapes.
            </p>
          </div>
      </div>
        
    </div>
  );
};
