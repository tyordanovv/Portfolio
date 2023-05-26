import React from "react";
import "./TechStackSectionStyle.css";
import ProjectCard from "./ProjectCard";

const TechStackSection = () => {
  return (
    <div className="tech-stack-section">
      <div className="transparent-image-container">
        <img src="java-logo.png" alt="Java Logo" />
        <img src="spring-logo.png" alt="Spring Logo" />
        <img src="logo192.png" alt="React.js logo" />
        <img src="aws-logo.png" alt="AWS Logo" />
        <img src="jenkins-logo.png" alt="Jenkins Logo" />
        <img src="docker-logo.png" alt="Docker-logo" />
        <img src="python-logo.png" alt="Python Logo" />
        <img src="oauth2-logo.png" alt="OAuth2 Logo" />
        <img src="hibernate-logo.png" alt="Hibernate Logo" />
        <img src="sql-logo.png" alt="SQL Logo" />
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default TechStackSection;
