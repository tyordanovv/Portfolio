import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./GetInTouchPanelStyle.css";

const GetInTouchPanel = () => {
  return (
    <div className="get-in-touch-panel">
      <h1>Get in Touch</h1>
      <p>Ready to discuss your project?</p>
      <div className="contact-group">
        <form class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <h4 for="name">Name</h4>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <h4 for="email">Email</h4>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div class="form-group">
            <h4 for="message">Message</h4>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <a href="mailto:t.yordanovv@gmail.com" className="contact-button">
          <FaEnvelope />
          Contact Me
        </a>
        </form>
        <div className="contact-image">
          <img src="email.png" alt="Email Logo" />
        </div>
      </div>
      
    </div>
  );
};

export default GetInTouchPanel;
