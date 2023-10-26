import { createContext, useState } from "react";


export const NavigationContext=createContext();


export const NavigationContextProvider=({children})=>{

    
  const [currPage,setPage]=useState("Home");

    return <NavigationContext.Provider value={{currPage,setPage}}>{children}</NavigationContext.Provider>

}