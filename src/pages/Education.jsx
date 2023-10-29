import React from "react";

import SMVEC_LOGO from "../resources/logo/SMVEC.gif";
import PUCC_LOGO from "../resources/logo/PUCC.jpeg";
import { GoBackBtn } from "../components/GoBackBtn";

export const Education = () => {
  return (
    <div className="container-fluid container-education text-light ">
      <GoBackBtn></GoBackBtn>
      
        <div className="row justify-content-center container-left education-container">
          <h3>My Education Track</h3>
          <div className="education  m-3">
            <div className="education-title ">
              <img src={SMVEC_LOGO} alt="SMVEC" />
              <h6>Sri Manakula Vinayagar Engineering College</h6>
            </div>
            <div className="education-details ">
              <div className="course-details">
                <p><strong>Batch : </strong>2020 - 2022</p>
                <p><strong>Specialization : </strong>Computer Application</p>
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
          <div className="education  m-3">
            <div className="education-title ">
              <img src={PUCC_LOGO} alt="SMVEC" />
              <h6>Pondicherry University Community College</h6>
            </div>
            <div className="education-details ">
              <div className="course-details">
                <p><strong>Batch : </strong>2017 - 2020</p>
                <p><strong>Specialization : </strong>Computer Application</p>
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
        </div>
        <div className="row justify-content-center container-right">
          <h2>My Skills</h2>
          
        </div>
     
    </div>
  );
};
