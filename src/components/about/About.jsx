import "./about.sass"

import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button"
import Navbar from "../navbar/Navbar";

function About() {
  return (
    <div className="about">
      <Navbar backPath="/"/>
      
      <p className="about__paragraph">💡 I am a full stack <span className="code-text code-text--purple">Ruby on Rails</span> and <span className="code-text code-text--red">JavaScript</span> engineer. I am passionate about front-end development.</p>
      <p className="about__paragraph">🌳 I love building beautiful apps that leaves a great impact on users.</p>
      <p className="about__paragraph">🚀 I am passionate, a team player, detail orientated and a self starter!</p>

      <Link to="/skills"><Button className="wide" buttonText="Check out my skills" /></Link>
      
    </div>
  );
}

export default About;
