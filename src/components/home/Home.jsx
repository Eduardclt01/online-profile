import "./home.sass"
import profilePic from "../../assets/images/profile.jpg"

import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button"

function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <div className="home__image">
          <img src={profilePic} className="profile-image" alt="" />
        </div>
      
        <div className="home__greeting">
          <h1 className="greeting-text">Hi,</h1>
          <h1 className="name-text">I am <span className="name">Eduard</span></h1>
          <h2 className="welcome-text">Welcome to my online profile!</h2>
        </div>
      </div>

      <div className="home__button">
        <Link to="/about"><Button className="wide" buttonText="Read More"></Button></Link>
      </div>
    </div>
  );
}

export default Home;
