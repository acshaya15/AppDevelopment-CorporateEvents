import React from 'react'
import img from "../assets/logo-color.png"
import "../Css/header.css";
import {  Link } from "react-router-dom";
const Uheader = () => {
    
      return (
        
        <header >
          <div className="logo">
                <img  src={img} alt="Company Logo"  />
                </div>
                <nav className="navbar">
                    <ul>
                        <li ><Link to="home" style={{color:"inherit", textDecoration: "none"}}>Home</Link></li>
                        <li><Link to="aboutus" style={{color:"inherit", textDecoration: "none"}}>About Us</Link></li>
                        <li ><Link to="services" style={{color:"inherit", textDecoration: "none"}}>Services</Link></li>
                        <li>Gallery</li>
                        <li>Logout</li>
                        <li><Link to="profile">User</Link></li>
                    </ul>
                </nav>
               
            </header>
      )
    }
export default Uheader