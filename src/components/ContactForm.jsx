import React from "react";
import linkedIn_logo from "../resources/icons/linked_in.svg";
import gitHub_logo from "../resources/icons/github.svg";
import resume_logo from "../resources/icons/user_circle_male_avatar.svg";

export const ContactForm = () => {
  return (
    <div className="contact-me-form-container row col-sm-12  col-md-12 col-lg-8">
      <div className="col-lg-6 col-sm-12 container-left p-1">
        <img src={linkedIn_logo} alt="Github" className="link-img-container " />
        <img src={gitHub_logo} alt="Linked In" className="link-img-container "/>
        <img src={resume_logo} alt="Resume"  className="link-img-container "/>
      </div>
      <div className="col-lg-6 col-sm-12 container-right p-1">

        <form action="#" className="row p-4">
            <input type="text" name="" id="" defaultValue={"Name"} className="col-sm-12 m-2 contact-input" />
            <input type="email" name="" id="" defaultValue={"Email Id"} className="col-sm-12 m-2 contact-input " />
            <input type="phone" name="" id="" defaultValue={"Contact"} className="col-sm-12 m-2 contact-input" />
            <textarea cols={4} type="text" name=""  id="" defaultValue={"Description"} className="col-sm-12 m-2 contact-input"/>
            <button className="btn btn-primary m-2">Send</button>

        </form>

      </div>
    </div>
  );
};
