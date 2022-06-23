import React from "react";
import "./Footer.css";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";

const Footer = () => {
  return (
    <div id='contact'>
      <div className='row' id='footer-row'>
        <h3 className='footer-header' href='#home'>
          SunnySide
        </h3>
        <div className='row' id='footer-row-links'>
          <span className='footer-link '>About</span>
          <span className='footer-link '>Services</span>
          <span className='footer-link '>Projects</span>
        </div>
        <div className='row' id='footer-row-icons'>
          <img src={facebook} alt='facebook' id='img5' />
          <img src={instagram} alt='instgram' id='img5' />
          <img src={twitter} alt='twitter' id='img5' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
