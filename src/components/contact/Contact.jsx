import "./contact.sass"

import React from "react";
import CV from '../../assets/files/eduard_cloete.pdf'
import Button from "../UI/button/Button";
import Navbar from "../navbar/Navbar";
import bitemoji from "../../assets/images/bitemoji.png"
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const notify = () => toast('Email copied!', { icon: '👏', });

  function copyEmail() {
    navigator.clipboard.writeText('eduardcloete@gmail.com');
    notify()
  }

  return (
    <div className="contact">
      <Navbar backPath="/experience"/>

      <div className="contact__links">
        <div className="contact-link" onClick={copyEmail}><Button className="wide" buttonText="eduardcloete@gmail.com" /></div>
        <a className="contact-link" target="_blank" rel="noreferrer" href={CV} download="Edaurd Cloete - CV"><Button className="wide" buttonText="Download CV" /></a>
        <a className="contact-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eduard-cloete-bb8b71150/"><Button className="wide"  buttonText="Visit my LinkedIn" /></a>
        <a className="contact-link" target="_blank" rel="noreferrer" href="https://github.com/Eduardclt01?tab=repositories"><Button className="wide" buttonText="Visit my Github" /></a>
      </div>
      <div className="contact__emoji">
        <img className="bitemoji" src={bitemoji} />
      </div>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default Contact;
