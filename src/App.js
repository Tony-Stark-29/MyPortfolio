import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Education } from "./pages/Education";
import { MyWorks } from "./pages/MyWorks";
import { ContactMe } from "./pages/ContactMe";
import { NavigationContextProvider } from "./context/NavigationContext";

function App() {
  return (
    <NavigationContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Education" element={<Education></Education>}></Route>
            <Route path="/MyWork" element={<MyWorks></MyWorks>}></Route>
            <Route path="/ContactMe" element={<ContactMe></ContactMe>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </NavigationContextProvider>
  );
}

export default App;
