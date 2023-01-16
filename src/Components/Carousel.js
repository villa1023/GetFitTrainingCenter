import React from 'react';
import './CarouselStyles.css';
import '../App.css';


function Carousel() {
  return (
    <div className='carousel-container' id="about">
      <div className="column" id="col1">
      <img src={require("../Images/slideprev1.png")} alt="preview" height="600" width="600" />
      </div>
      <div className="column" id="aboutDesc">
        <h1> About Us </h1>
        <p class="about-info">
        Get Fit is a state-of-the-art fitness facility that offers everything you need to get in shape and reach your health and wellness goals. 
        Aside from basic memberships, we also offer personal training services for those who want a more personalized workout experience. 
        And for those who prefer to exercise at all hours, we offer 24/7 access with a key, so you can come and go as you please. 
        Plus, there's no need to worry about being tied down by a contract - our memberships are flexible and can be cancelled at any time.
        We are located at 74804 Joni Dr #12A, Palm Desert, CA 92260.
        So come and check us out today and see all that we have to offer!
        </p>
        <a href="https://www.instagram.com//" target="_blank" class="follow-btn"> <i class="fa fa-instagram"> Follow us on Instagram </i></a>
        </div>
      <div className="column" id="col2">
      <img src={require("../Images/prev2.jpeg")} alt="preview2" height="600" width="600"/>
      </div>
    </div>
  )
}

export default Carousel