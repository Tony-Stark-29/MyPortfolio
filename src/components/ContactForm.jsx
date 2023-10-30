import React, { useRef, useContext } from "react";
import home from "../css/Home.module.css";
import { ContactLinks } from "../components/ContactLinks";
import emailjs from "@emailjs/browser";
import contact from "../css/ContactMe.module.css";
import { FormPopUpContext } from "../context/FormPopUpContext";
import { Link } from "react-router-dom";

export const ContactForm = () => {
  const contactForm = useRef();

  const { setShowContactForm } = useContext(FormPopUpContext);

  //console.log(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,contactForm.current,process.env.REACT_APP_PUBLIC_KEY);

  const emailMe = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SERVICE_ID);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        contactForm.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.message);
        }
      );
  };

  return (
    <>
      <div className={contact.overlay}></div>
      <div className={`${contact.contact_container}  row  col-sm-12  col-lg-8`}>
        <div
          className={`col-lg-6 col-sm-12 ${contact.container_left}  ${home.link_img_container}`}
        >
          <ContactLinks></ContactLinks>
        </div>
        <div className={`col-lg-6 col-sm-12 ${contact.container_right}`}>
          <Link to="/">
            <i
              className={`fa-solid fa-xmark ${contact.close}`}
              style={{ color: "#ffffff" }}
              onClick={() => {
                setShowContactForm(false);
              }}
            ></i>
          </Link>
          <form
            className="form-input-group p-4"
            ref={contactForm}
            onSubmit={emailMe}
          >
            <h3 className="text-light">Write to me</h3>
            <input
              type="text"
              name="sender_name"
              defaultValue={"Name"}
              className={`col-sm-12 my-2 ${contact.contact_input}`}
            />
            <input
              type="email"
              name="sender_email"
              defaultValue={"Email Id"}
              className={`col-sm-12 my-2 ${contact.contact_input}`}
            />
            <input
              type="phone"
              name="sender_contact"
              defaultValue={"Contact"}
              className={`col-sm-12 my-2 ${contact.contact_input}`}
            />
            <textarea
              type="text"
              name="sender_message"
              defaultValue={"Description"}
              className={`col-sm-12 my-2 ${contact.contact_input}`}
            />
            <button type="submit" className="btn btn-primary m-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
