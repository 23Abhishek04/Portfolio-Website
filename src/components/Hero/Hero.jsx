import React from "react";
import "./Hero.css";
import Profile from "../../assets/Profilee.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Profile} alt="" className="profile"/>
      <h1>
        <span>I'm Abhishek Bamane,</span>FrontEnd Developer based in INDIA.
      </h1>
      <p>I am a Frontend Developer & Data Analyst from Pune, India. </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
