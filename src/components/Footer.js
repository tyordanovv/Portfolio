import "./FooterStyle.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-address">
          <h3>
            <FaMapMarkerAlt /> Address:
          </h3>
          <p>Eggenberger Gürtel 71, Graz, Austria</p>
        </div>
        <div className="footer-contact">
          <h3>
            <FaPhone /> Contact:
          </h3>
          <p>Phone: +359 88 4364584</p>
          <p>Email: t.yordanovv@gmail.com</p>
        </div>
        <div className="footer-links">
          <h3>Links:</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/your-profile">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your-profile">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Yordanov IT Services. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
