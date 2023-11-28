import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NavigationContextProvider } from "./context/NavigationContext";
import { FormPopUpContextProvider } from "./context/FormPopUpContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationContextProvider>
      <FormPopUpContextProvider>
        <App />
      </FormPopUpContextProvider>
    </NavigationContextProvider>
  </React.StrictMode>
);

 
