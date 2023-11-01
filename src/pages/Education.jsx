import React from "react";

import SMVEC_LOGO from "../resources/logo/SMVEC.gif";
import PUCC_LOGO from "../resources/logo/PUCC.jpeg";
import { GoBackBtn } from "../components/GoBackBtn";
import education from "../css/Education.module.css";

import HTML_LOGO from "../resources/icons/html-icon.svg";
import CSS_LOGO from "../resources/icons/css-icon.svg";
import JS_LOGO from "../resources/icons/javascript-programming-language-icon.svg";
import REACT_LOGO from "../resources/icons/react-js-icon.svg";
import NODE_LOGO from "../resources/icons/node-js-icon.svg";
import BOOTSTRAP_LOGO from "../resources/icons/bootstrap-4-icon.svg";
import JAVA_LOGO from "../resources/icons/java-programming-language-icon.svg";

export const Education = () => {
  return (
    <>
      <GoBackBtn></GoBackBtn>

      <div className={`container ${education.container} text-light`}>
        <div className={`  justify-content-center ${education.education_container}`}>
          <h2>Education</h2>
          <div className={`${education.education}`}>
            <div className={education.education_tag}>
              M <br />C <br />A
            </div>
            <div className={education.education_title}>
              <img src={SMVEC_LOGO} alt="SMVEC" />
              <h6>Sri Manakula Vinayagar Engineering College</h6>
            </div>
            <div className={education.education_details}>
              <div className={education.course_details}>
                <p>
                  <strong>Batch : </strong>2020 - 2022
                </p>
                <p>
                  <strong>Specialization : </strong>Computer Application
                </p>
                <p>
                  <strong>Completed On :</strong> Nov 2022
                </p>
              </div>
            </div>
            <div className={education.course_outcome}>
              <div className={education.outcome}>
                <p>8.75</p>
                <hr />
                <p>10</p>
              </div>
            </div>
          </div>
          <div className={`${education.education} `}>
            <div className={education.education_tag}>
              B <br />C <br /> A
            </div>
            <div className={education.education_title}>
              <img src={PUCC_LOGO} alt="SMVEC" />
              <h6>Pondicherry University Community College</h6>
            </div>
            <div className={education.education_details}>
              <div className={education.course_details}>
                <p>
                  <strong>Batch : </strong>2017 - 2020
                </p>
                <p>
                  <strong>Specialization : </strong>Computer Application
                </p>
                <p>
                  <strong>Completed On :</strong> Sep 2020
                </p>
              </div>
            </div>
            <div className={education.course_outcome}>
              <div className={education.outcome}>
                <p>7.10</p>
                <hr />
                <p>10</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`"  justify-content-center ${education.skills_container}"`}>
          <h2>My Skills</h2>

          <div className={education.skills}>
            <div className={education.skill}>
              <h5>Front-end </h5>
              <img src={HTML_LOGO} alt="Html" />
              <img src={CSS_LOGO} alt="Css" />
              <img src={JS_LOGO} alt="Js" />
            </div>
            <div className={education.skill}>
              <h5>Front-end Frameworks/ Libraries</h5>
              <img src={BOOTSTRAP_LOGO} alt="BOOTSTRAP" />
              <img src={REACT_LOGO} alt="REACT Js" />
            </div>
          </div>

          <div className={education.skills}>
          <div className={education.skill}>
            <h5>Back-end </h5>
            <img src={NODE_LOGO} alt="Node js" />
          </div>
          <div className={education.skill}>
            <h5>Programming Language </h5>
            <img src={JAVA_LOGO} alt="Java" />
          </div>
        </div> 
        
       
        </div>

        
      </div>
    </>
  );
};
