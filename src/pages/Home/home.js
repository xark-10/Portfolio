import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import homeImg from '../../Assets/031.png'


function Home(){
    return(
    <div className="container col-lg-12">
        <img src={homeImg} className="homeImg"/>
    </div>
    )
}

export default Home;