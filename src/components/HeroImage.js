import "./HeroImageStyle.css";
// import personalImage from "./path/to/your/image.jpg";

import React from "react";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <p>Hi, my name is</p>
            <h1 style={{ color: "white" }}>Tihomir Yordanov</h1>
            <h2>
              Secure, Reliable, and Efficient Full-Stack Solutions for Your
              Business
            </h2>
            <p>
              Are you seeking a full-stack developer with a strong focus on
              backend development, security and microservices?{" "}
              <span className="highlighted-text">Look no further.</span> I am
              dedicated to providing you with the most secure and comprehensive
              IT solutions tailored to your business needs.
            </p>
          </div>
          <div className="hero-image">{/* TODO add pic*/}</div>
        </div>
        <div className="hero-buttons">
          <Link to={"/contact"}>Hire Me</Link>
          <Link to={"/services"}>Services</Link>
        </div>
      </div>
      {/* <img src={personalImage} alt="Personal" /> */}
    </div>
  );
};

export default HeroImage;
