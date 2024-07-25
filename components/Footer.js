import React from 'react';
import '../styles/Footer.css'; 
import schoolLogo from '../assets/images/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={schoolLogo} alt="Springdale Public School Logo" />
        </div>
        <div className="footer-details">
          
          <p className='q'><strong>Address:</strong> 123 Education Lane, School City, SC 12345</p>
          <p className='q'><strong>Phone:</strong> (123) 456-7890</p>
          <p className='q'><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
          <div className="footer-links">
            <a href="/about-us">About Us</a>
            <a href="/academics">Academics</a>
            <a href="/admissions">Admissions</a>
            <a href="/faculty">Faculty</a>
            <a href="/students">Students</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact-us">Contact Us</a>
            <p className='qq'>&copy; 2024 Springdale Public School. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
