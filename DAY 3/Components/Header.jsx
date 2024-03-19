import React from 'react'
import img from "../assets/logo-color.png"
import "../Css/header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const sectionPosition = targetSection.getBoundingClientRect().top;
      window.scrollTo({
        top: sectionPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };
  return (
    
    <header >
      <div className="logo">
            <img  src={img} alt="Company Logo"  />
            </div>
            <nav className="navbar">
                <ul>
                    <li onClick={()=> scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about-us')}>About Us</li>
                    <li onClick={() => scrollToSection('services')}>Services</li>
                    <li>Gallery</li>
                    <li>Review</li>
                    <li><Link to="/corporate/login" style={{color:"inherit", textDecoration: "none"}}>Login/Signup</Link></li>
                </ul>
            </nav>
           
        </header>
  )
}

export default Header