import React from "react";
import "./SkillCardStyle.css";

const SkillCard = ({ title, description }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
