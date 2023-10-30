import React from 'react'
import { ContactForm } from '../components/ContactForm'
 
import contact from "../css/ContactMe.module.css";
export const ContactMe = () => {
  return (
    <div className={contact.container}>
      
      <ContactForm></ContactForm>

    </div>
  )
}
