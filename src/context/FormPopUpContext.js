

import { useState } from "react";
import { createContext } from "react";

export const FormPopUpContext=createContext();

export const FormPopUpContextProvider=({children})=>{

    const [showContactForm,setShowContactForm]=useState(false);

    return <FormPopUpContext.Provider value={{showContactForm,setShowContactForm}}>
        {children}
    </FormPopUpContext.Provider>

}