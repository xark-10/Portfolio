import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "../pages/Home/home";
import{BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import About from "../pages/About/about";
import Contact from "../pages/Contact/contact";
import Projects from "../pages/Projects/projects";
import Testimonals from "../pages/Testimonals/testimonals";
import Works from "../pages/Workexperence/works";

function App(){
    return(
         <main>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/About" exact element={<About/>}/>
                <Route path="/Projects" exact element={<Projects/>}/>
                <Route path="/Testimonals" exact element={<Testimonals/>}/>
                <Route path="/Works" exact element={<Works/>}/>
                <Route path="/Contact" exact element={<Contact/>}/>
            </Routes>
        </main> 
        
    )
}

export default App;