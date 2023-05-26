import Card from "./Card";
import "./ProjectCardStyle.css";

import React from "react";

const ProjectCard = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My latest works</h1>
      <div className="project-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="projects-heading">Some other projects</h1>
      <div className="project-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProjectCard;
