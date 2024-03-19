import React from 'react'
import "../Css/header.css"
import img1 from "../assets/img4.jpg"
import video from "../assets/Product-Launch-Video.mp4"
const ProductLaunch = () => {
  return (
    <div className="pd">
    <div className='productlaunch'>
         <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
        
      </video>
      <div className="content">
            <h3>
            PRODUCT LAUNCH<br/>
            EVENT SERVICES
            </h3>
            <p>Leading the way in creatiing inspiring, informative and impressive product launch events.</p>
          </div>
          
    </div>
    <h2 className="breadcrumb">Services &gt;&gt; ProductLaunch</h2>
    <div className='info'>
        <img src={img1} alt=""/>
        <div className='content'>
        <h1>FULL PRODUCTION & MANAGEMENT</h1>
        <p> Our product launch services provide a comprehensive suite of services to ensure your new product hits the market with maximum impact. From pre-launch planning and promotion to post-launch analysis, our team is here to help, providing a full and robust product launch event.</p>
        <ul className="list">
            <li><span>-</span>EVENT DESIGN</li>
            <li><span>-</span>PLANNING, CO-ORDINATING & MANAGEMENT</li>
            <li><span>-</span>EVENT THEMING</li>
            <li><span>-</span>AV SETUP & DELIVERY</li>
            <li><span>-</span>PRODUCT LAUNCH ENTERTAINMENT</li>
            <li><span>-</span>BRANDING & SIGNAGE</li>
        </ul>
        </div>
    </div>
    <div className="pd-ser">
    <div className='background-image-div'>
        <h1 className='heading'>Our product Launch Services</h1>
        <div className='boxContainer'>
            <div className="box">
                <h3>hi</h3>
            </div>
        </div>
        <div className='boxContainer'>
            <div className="box">
                <h3>hi</h3>
            </div>
        </div>
        <div className='boxContainer'>
            <div className="box">
                <h3>hi</h3>
            </div>
        </div>
        <div className='boxContainer'>
            <div className="box">
                <h3>hi</h3>
            </div>
        </div>
        <div className='boxContainer'>
            <div className="box">
                <h3>hi</h3>
            </div>
        </div>
        <div className='boxContainer'>
            <div className="box">
                <h3>hi</h3>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ProductLaunch