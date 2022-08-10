import React from "react";
import LinksDiv from "./Components/LinksDiv";
import AboutTextDiv from "./Components/AboutTextDiv";
import "./style.css";

const About = () => {
  return (
    <div className="content-container">
      <div className="textDiv">
        <AboutTextDiv />
      </div>
      <div className="linksDiv">
        <LinksDiv />
      </div>
    </div>
  );
};

export default About;
