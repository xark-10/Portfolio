import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {motion} from "framer-motion"
import homeImg from '../../Assets/031.png'


function Home(){
    return(
    <motion.div 
    className="container col-lg-12 c-preview__img"
    initial ={{width:0}} 
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition: {duration:0.1}}}
    >
        <img src={homeImg} className="homeImg"/>
    </motion.div>

    

    
    )
}

export default Home;