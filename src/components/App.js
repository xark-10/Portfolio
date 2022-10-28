import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import AnimatedRoutes from "./AnimatedRoutes/AnimatedRoutes";
import Navbar from "../components/Navbar/Navbar"
function App() {
    return(
        <div >
        <Navbar/>
        <AnimatedRoutes />
        </div>
    )



}

export default App;