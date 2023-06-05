import React from "react";
import SkillCard from "./SkillCard";
import "./SkillSectionStyle.css"

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h1>What do I offer</h1>
      <div></div>
      <div className="skill-cards">
        <SkillCard
          title="01. Research and analysis"
          description="I invest time in understanding your business requirements and goals, allowing me to provide effective solutions tailored to your needs and align with the industry standards and regulations."
        />
        <SkillCard
          title="02. Design"
          description="For design aspects, I collaborate with established designers who specialize in UI and UX to ensure the creation of engaging and intuitive applications. By working closely with them, I guarantee that the final product delivers perfect user interface."
        />
        <SkillCard
          title="03. Development and deployment"
          description="Throughout the development process, I implement the best design patterns and conduct testing to identify and fix any potential issues, ensuring the delivery of high-quality code. Additionally, I provide seamless deployment using some of the most popular and reliable cloud providers such as AWS."
        />
      </div>
    </div>
  );
};

export default SkillsSection;
