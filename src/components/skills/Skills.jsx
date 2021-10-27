import "./skills.sass"

import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button"
import SkillItem from "./SkillItem";
import Navbar from "../navbar/Navbar";

function Skills() {
  return (
    <div className="skills">
      <Navbar backPath="/about" />

      <div className="skills__section">
        <h1 className="heading heading--purple">Frameworks and langages</h1>
        <ul>
          <li><SkillItem skill="JavaScript" /></li>
          <li><SkillItem skill="ReactJS" /></li>
          <li><SkillItem skill="HTML/CSS/SASS" /></li>
          <li><SkillItem skill="Ruby on Rails" /></li>
        </ul>
        
      </div>

      <div className="skills__section">
        <h1 className="heading heading--green">Tools and work</h1>
          <ul>
            <li><SkillItem skill="Agile" /></li>
            <li><SkillItem skill="Git" /></li>
            <li><SkillItem skill="Jirah" /></li>
            <li><SkillItem skill="BEM" /></li>
            <li><SkillItem skill="API Integration" /></li>
          </ul>
      </div>

      <Link to="/experience"><Button className="wide" buttonText="See where I have worked" /></Link>

    </div>
  );
}

export default Skills;
