import React from 'react'
import prod from "../assets/productlaunch.png"
import deal from "../assets/dealersmeet.jpg"
import conf from "../assets/pressconf.jpg"
import award from "../assets/awardceremony.jpg"
import inaug from "../assets/Inauguration.jpg"
import team from "../assets/teambuild.jpg"
import meet from "../assets/meet.jpg"
import char from "../assets/charity.jpg"
import "../Css/header.css"
import { Link } from "react-router-dom"
const Services = () => {
  return (
    <div id="services" className="services">
            <h1 className="heading">OUR SERVICES</h1>
            <div className="boxContianer">
              <Link to="productlaunch"><div className="box">
              <img src={prod} alt="Service 1" />
                <h3>Product Launches</h3>
               
              </div></Link>
              <div className="box">
              <img src={deal} alt="Service 2" />
                <h3>Dealer Meets</h3>
               
              </div>
              <div className="box">
              <img src={conf} alt="Service 3" />
                <h3>Press Conferences</h3>
             
              </div>
              <div className="box">
              <img src={award} alt="Service 4" />
                <h3>Award Ceremonies</h3>
              
              </div>
              <div className="box">
              <img src={inaug} alt="Service 5" />
                <h3>Inaugurations</h3>
                
              </div>
              <div className="box">
              <img src={char} alt="Service 6" />
                <h3>charity events</h3>
               
              </div>
              <div className="box">
              <img src={team} alt="Service 7" />
                <h3>Team Building</h3>
                
              </div>
              <div className="box">
              <img src={meet} alt="Service 8" />
                <h3>Annual Corporate Meets</h3>
                
              </div>
            </div>
        </div>
  )
}

export default Services