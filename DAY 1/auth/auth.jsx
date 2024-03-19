import React from "react";
import { useLocation } from "react-router-dom";
import "../Components/Header"
import "../Css/header.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import img from "../assets/image1.jpg";
import prod from "../assets/productlaunch.png"
import deal from "../assets/dealersmeet.jpg"
import conf from "../assets/pressconf.jpg"
import award from "../assets/awardceremony.jpg"
import inaug from "../assets/Inauguration.jpg"
import team from "../assets/teambuild.jpg"
import meet from "../assets/meet.jpg"
import char from "../assets/charity.jpg"
const Auth = () => {
 
  return (
    <div>  
       <Header/>
        <div id="home"className="home">
          <div className="content">
            <h3>
            Find Your SPOTLIGHT,<br/>
            Its Ready For You!
            </h3>
            <p>From conception to execution, we ensure your event shines brightly, leaving a lasting impression</p>
          </div>
        </div>
       
        <div  id="about-us" className="about-us">
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
        
        <div id="services" className="services">
            <h1 className="heading">OUR SERVICES</h1>
            <div className="boxContianer">
              <div className="box">
              <img src={prod} alt="Service 1" />
                <h3>Product Launches</h3>
               
              </div>
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
        <Footer />
      </div>
    
  );
};

export default Auth;
