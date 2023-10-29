import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Education } from "./pages/Education";
import { MyWorks } from "./pages/MyWorks";
import { ContactMe } from "./pages/ContactMe";
 
 

function App() {

 

  return (
    
      <div className="App"  >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Education" element={<Education></Education>}></Route>
            <Route path="/MyWork" element={<MyWorks></MyWorks>}></Route>
            <Route path="/ContactMe" element={<ContactMe></ContactMe>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
