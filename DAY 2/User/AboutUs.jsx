import React from 'react'
import Uheader from './Uheader'
import "../Css/header.css"
import img from "../assets/image1.jpg";
const AboutUs = () => {
  return (
    
        <div   className="about-us">
           <h1 className="heading"><span>About </span>Us</h1>
           <div className="row">
            <div className="img">
              <img src={img} alt="image"/>
            </div>
           <div className="content">
              <h3>Welcome to SPOTLIGHT!</h3>
              <p>we specialize in crafting unforgettable corporate events. With a dedicated team of experienced professionals, we meticulously plan and execute every detail to perfection, from intimate executive retreats to large-scale conferences.</p> 
           </div>
           </div>
        </div>
   
  )
}

export default AboutUs