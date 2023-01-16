import React from 'react';
import './FooterStyles.css';
import '../App.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css'

function Footer() {
  return (
    <div className='footer-container'>
        <footer>
            <div className="footer">
                <div className="row">
                <h1> Location </h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.7482562181967!2d-116.36178428484986!3d33.741325280691726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafde5b3bdeebd%3A0xcb8f23d83c1a179e!2sGet-Fit%20Training%20Systems!5e0!3m2!1sen!2sus!4v1673083626632!5m2!1sen!2sus" 
                width="75%" height="500">
                </iframe>
                </div>
                <div className="row">
                    <img
                        style={{
                        resizeMode: "cover",
                        height: 100,
                        width: 300,
                        margin: 8
                        }}
                    
                    src={require('../Images/newlogo.png')} alt='logo'/>
                    <div id="contact-info">
                    <h1>Contact Info</h1>
                    <p>Phone:  (760) 984-6191</p>
                    <p> Email: getfit92260@gmail.com</p>
                    </div>
                </div>
                <div className="row">
                <ul>
                <li><a href="mailto:getfit92260@gmail.com">Contact us</a></li>
                <li><a href="#col1">About Us</a></li>
                <li><a href="https://goo.gl/maps/x2sZuKM971WSnCuV9">Location</a></li>
                </ul>
                </div>

                <div class="row">
                {/* Designed By: Oscar Villa */}
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer