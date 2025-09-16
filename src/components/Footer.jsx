import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="aizaliq-footer">
      <div className="footer-content">
        <div className="brand">
          <h3>AIZALIQ<span> Studios</span></h3>
          <p>Empowering healthcare education through immersive gaming.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <p>📧 hello@aizaliq.com</p>
          <p>📱 +91-9876543210</p>
          <div className="social-icons">
            <a href="#"><span></span></a>
            <a href="#"><span></span></a>
            <a href="#"><span></span></a>
          </div>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aizaliq Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;