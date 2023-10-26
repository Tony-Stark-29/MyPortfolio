 
import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Education } from './pages/Education';
import { MyWorks } from './pages/MyWorks';
import { AboutMe } from './pages/AboutMe';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Education' element={<Education></Education>}></Route>
            <Route path='/MyWork' element={<MyWorks></MyWorks>}></Route>
            <Route path='/AboutMe' element={<AboutMe></AboutMe>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
