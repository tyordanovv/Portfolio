import React from "react";
import "./ProjectCardStyle.css";
import { FaGithub } from "react-icons/fa";

const Card = () => {
  return (
    <div className="project-card">
      <img src="" alt="image" />
      <h2 className="project-title">Title</h2>
      <div className="project-details">
        <p>Project description</p>
        <h4>Used technologies</h4>
        <div className="project-btns">
          <button className="btn">View</button>
          <div className="icon-container">
            <a href="https://www.linkedin.com/your-profile">
              <FaGithub className="github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
