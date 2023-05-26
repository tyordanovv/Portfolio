import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./GetInTouchPanelStyle.css";

const GetInTouchPanel = () => {
  return (
    <div className="get-in-touch-panel">
      <h1>Get in Touch</h1>
      <p>Ready to discuss your project?</p>
      <a href="mailto:t.yordanovv@gmail.com" className="contact-button">
        <FaEnvelope />
        Contact Me
      </a>
    </div>
  );
};

export default GetInTouchPanel;
