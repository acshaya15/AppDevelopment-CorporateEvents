import React from 'react';
import "../Css/header.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>we specialize in crafting unforgettable corporate events. </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: SPOTLIGHT@example.com</p>
          <p>Phone: 9843319923</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Spotlight. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
