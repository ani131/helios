import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-heading">About Us</h2>
          <p className="footer-text">
            Helios one of the top space tourism companies in the world. Our
            mission remains to provide a safe and exciting to help others
            experience space for themselves.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <p className="footer-text">123 Main St</p>
          <p className="footer-text">Anytown, USA 12345</p>
          <p className="footer-text">Email: info@example.com</p>
          <p className="footer-text">Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2023 Helios. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
