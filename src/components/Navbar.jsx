import React from 'react'

import logofozant from "../assets/logofozant.png";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    logo,
    LogoImage
  } from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
            <NavLink to='/'>
            <LogoImage src={logofozant} alt='logo' /> 
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to='/about' activeStyle>
                Cart
              </NavLink>
              <NavLink to='/services' activeStyle>
                Purchase History
              </NavLink>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/'>Sign In</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
      );
    };
    
export default Navbar

