import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Springdale Public School" />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
