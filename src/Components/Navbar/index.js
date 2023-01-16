
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { Button } from './Button.js'
import './Button.css';
  
const Navbar = () => {

  return (
    <>
      <Nav>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div id="logo">
        <img  
            style={{
            resizeMode: "cover",
            height: 70,
            width: 200,
            margin: 8
          }}
        
        src={require('../../Images/newlogo.png')} alt='logo'/>
      </div>
      
      {/* </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <Button buttonStyle='btn--primary'>
            Sign Up</Button>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;