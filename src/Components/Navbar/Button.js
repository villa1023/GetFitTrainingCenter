import React, { useState, useRef } from 'react';
import './Button.css';
import '../Popup.css'
import { Link } from 'react-router-dom';
import '../../App.css';
import emailjs from '@emailjs/browser';


const STYLES = ['btn--primary', 'home-button'];

export const Button = ({
    children,
    type, 
    onClick, buttonStyle, buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const signUpMessage = "Please fill out this form and we will respond as soon as possible with membership information. Thank You!";
    const signUpSuccessMessage = "Success! Thank you for filling out the form!";
    const [buttonPopup, setButtonPopup] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const togglePopup = () => {
        setButtonPopup(!buttonPopup);
        setSignUpSuccess(false);
    }



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j8ylyii', 'template_56ehs87', form.current, 'idv8HkK3JjgzqqLmF')
          .then((result) => {
              console.log(result.text);
              setSignUpSuccess(true);
          }, (error) => {
              console.log(error.text);
          });
        };

    return (
        <Link className='btn-mobile'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <button 
            className={`${checkButtonStyle}`}
            onClick={togglePopup}
            type={type}
            >
                {children}
            </button>
            {buttonPopup && (
            <html>
                <body>
                    <div className="popup">
                        <div className="popup-inner">
                            <button className="close-btn" onClick={togglePopup}>Close</button>
                            <form ref={form} onSubmit={sendEmail}>
                                <h1 id="form-h1">Sign Up  / Register</h1>
                                <p id="form-p">{signUpSuccess ? signUpSuccessMessage : signUpMessage}</p>
                                    <div className="form-inputs">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="user_name" placeholder="Enter First Name" required/>
                                    </div>
                                    <div className="form-inputs">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="user_email" placeholder="Enter email" required></input>
                                    </div>
                            
                                    <div className="form-inputs">
                                    <label htmlFor="phone">Phone Number</label> <br/>
                                    <input type="tel" name="user_phone" placeholder="Enter Phone Number" required></input>
                                    </div>
                                    <button className="submit-btn" type="submit" value="submit" onClick={sendEmail}>Submit</button>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
            
            )}
        </Link>
    )
};