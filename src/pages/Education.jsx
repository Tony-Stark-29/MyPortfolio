import React from "react";

import SMVEC_LOGO from "../resources/logo/SMVEC.gif";
import PUCC_LOGO from "../resources/logo/PUCC.jpeg";

export const Education = () => {
  return (
    <div className="home-container container">
      <div className="row  ">
        <div className="col-lg-6 container-left education-container">
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
        <div className="col-lg-6 container-right"></div>
      </div>
    </div>
  );
};
