import "./experience.sass"


import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button"
import ExperienceItem from "./ExperienceItem";
import Navbar from "../navbar/Navbar";

function Experience() {
  return (
    <div className="experience">
      <Navbar backPath="/skills"/>

      <h1 className="experience-heading">Experience</h1>
      <ExperienceItem companyName="Platform45" duration="Oct 2019 - present" role="Full Stack Developer" descrption="I am a full-stack developer. I use rails for the back-end and javascript/html/css for the front-end. My roles are to develop end to end feautures (back-end, front-end and database design), fix bugs and do client support. We work in an agile team, we use git and jira."></ExperienceItem>
      <ExperienceItem companyName="Freelance" duration="Jan 2018 - Oct 2019" role="Full Stack Developer" descrption="I developed landing page websites for small businesses, most of the websites where for marketing and to showcase their work. My main tool was WordPress, I developed custom themes for the clients."></ExperienceItem>
      <ExperienceItem companyName="OpenServe" duration="Feb 2019 - Apr 2019" role="Intern iOS developer" descrption="As an intern I was asked to get an old iOS app up and running. I was exposed to an agile envoirment."></ExperienceItem>
      <ExperienceItem companyName="Lunar Dev" duration="Feb 2018 - Apr 2018" role="Intern Web Developer" descrption="Lunar dev was a start up web developmen company, I learned how to create custom WordPress themes and working directly with new clients"></ExperienceItem>

      <Link to="/contact"><Button className="wide" buttonText="Reach out to me" /></Link>

    </div>
  );
}

export default Experience;
