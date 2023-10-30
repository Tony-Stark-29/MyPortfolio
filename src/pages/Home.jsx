import React  from "react";
import home from "../css/Home.module.css";
import { Navbar } from "../components/Navbar";
import { ContactLinks } from "../components/ContactLinks";
import { ContactForm } from "../components/ContactForm";
import { FormPopUpContext } from "../context/FormPopUpContext";
import { useContext } from "react";

 export const Home = () => {
  const {showContactForm }=useContext(FormPopUpContext);
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
              <ContactLinks></ContactLinks>
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
      {showContactForm && <ContactForm></ContactForm>}
    </div>
  );
};
