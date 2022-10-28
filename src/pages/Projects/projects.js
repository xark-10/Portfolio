import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion"


function Projects() {
  return (
    <motion.div
      className="container"
      initial ={{width:0}} 
    animate={{width:"100%"}}
    exit={{x:window.innerWidth, transition: {duration:0.1}}}
    >
      {" "}
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        projects
      </h1>
    </motion.div>
  );
}

export default Projects;
