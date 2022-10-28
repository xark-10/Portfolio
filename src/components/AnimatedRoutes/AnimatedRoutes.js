import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../../pages/About/about";
import Contact from "../../pages/Contact/contact";
import Projects from "../../pages/Projects/projects";
import Testimonals from "../../pages/Testimonals/testimonals";
import Works from "../../pages/Workexperence/works";
import Home from "../../pages/Home/home";
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Projects" exact element={<Projects />} />
        <Route path="/Testimonals" exact element={<Testimonals />} />
        <Route path="/Works" exact element={<Works />} />
        <Route path="/Contact" exact element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
