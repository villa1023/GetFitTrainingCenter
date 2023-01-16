import React, { useState } from 'react';
import { Button } from './Navbar/Button';
import './HeroSectionStyle.css';
import '../App.css';

function HeroSection() {
  return (
    <section className="section-one">
        <div className="container"> 
          <div class="Newlogo">
              
          </div>
          {/* <img
           style={{
           resizeMode: "cover",
           height: 800,
           width: 1000,
           margin: -220
            }}
          src={require('../Images/getfitLogo-heroSection.png')} alt="hero-logo"/> */}
          {/* <h1 class="main-cont">Get Fit Training Center</h1> */}
          <div class="hero-text">
              <p>Open 24/7 for all members. Stop by and check us out. <br/>
                YOUR CHANGE STARTS NOW!
              </p>
              <Button buttonStyle='home-button'>
                GET STARTED</Button>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
