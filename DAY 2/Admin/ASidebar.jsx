import React from 'react'
import "../Css/admin.css"
import img from "../assets/logo-color.png"
const ASidebar = () => {
  return (
    <header >
    <div className="logo">
          <img  src={img} alt="Company Logo"  />
          </div>
          <nav className="navbar">
              <ul>
                  <li>Logout</li>
                  
              </ul>
          </nav>
          </header>
  )
}

export default ASidebar