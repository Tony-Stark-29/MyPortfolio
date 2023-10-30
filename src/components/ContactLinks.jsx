import React from "react";
import linkedIn_logo from "../resources/icons/linked_in.svg";
import gitHub_logo from "../resources/icons/github.svg";
import resume_logo from "../resources/icons/user_circle_male_avatar.svg";
import { Link } from "react-router-dom";

export const ContactLinks = () => {
  return (
    <>
      <Link to="https://in.linkedin.com/" target="_blank">
        <img src={linkedIn_logo} alt="Github" />
      </Link>
      <Link>
        <img src={gitHub_logo} alt="Linked In" />
      </Link>
      <Link>
        <img src={resume_logo} alt="Resume" />
      </Link>
    </>
  );
};
