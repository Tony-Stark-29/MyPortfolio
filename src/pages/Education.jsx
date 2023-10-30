import React from "react";

import SMVEC_LOGO from "../resources/logo/SMVEC.gif";
import PUCC_LOGO from "../resources/logo/PUCC.jpeg";
import { GoBackBtn } from "../components/GoBackBtn";

import education from "../css/Education.module.css";

export const Education = () => {
  return (
    <>
      <GoBackBtn></GoBackBtn>
      
      <div className={`container ${education.container} text-light`}>
        <div
          className={`row m-2 justify-content-center ${education.education_container}`}>
          <h2>Education</h2>
          <div className={`${education.education}`}>
            <div className={education.education_tag}>
              M <br />C <br />A
            </div>
            <div className={education.education_title}>
              <img src={SMVEC_LOGO} alt="SMVEC" />
              <h6>Sri Manakula Vinayagar Engineering College</h6>
            </div>
            <div className="education-details ">
              <div className="course-details">
                <p>
                  <strong>Batch : </strong>2020 - 2022
                </p>
                <p>
                  <strong>Specialization : </strong>Computer Application
                </p>
              </div>
            </div>
            <div className="course-outcome">
              <div className="outcome-overlay">
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
            <div className="education-details ">
              <div className="course-details">
                <p>
                  <strong>Batch : </strong>2017 - 2020
                </p>
                <p>
                  <strong>Specialization : </strong>Computer Application
                </p>
              </div>
            </div>
            <div className="course-outcome">
              <div className="outcome-overlay">
                <p>8.75</p>
                <hr />
                <p>10</p>
              </div>
            </div>
          </div>
        </div>

 
        <div className="row justify-content-center container-right">
          <h2>My Skills</h2>
        </div>
      </div>
    </>
  );
};
