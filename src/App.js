import React,{useState} from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from './components/About/About.js';
import Footer from './components/footer/footer.js';
import Head from './components/landingPage/head.js';
import Loader from './components/loader/loader.js';
import Project from './components/projects/project.js';
function App() {
  const [Compn, setCompn] = useState([<Loader/>]);
  setTimeout(() => {
    setCompn([<Head/>,<About/>,<Project/>,<Footer/>])    
  }, 2000);
 return(
   <div>
      <BrowserRouter>
            <Routes>
            <Route exact path="/" element={Compn}></Route>
            {/* <Route exact path="/" element={[<Head/>,<About/>,<Project/>,<Footer/>]}></Route> */}
            </Routes>
        </BrowserRouter>
   </div>
 )
}
export default App