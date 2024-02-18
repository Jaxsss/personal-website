import React from "react";
import "./Footer.css";
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'

const Footer = () => {
  return (
     <div className="footer">
         <div>© 2024 Marek Žák</div>
         <SocialIcon className="footer-icons" url="https://www.linkedin.com/in/marek-%C5%BE%C3%A1k-2473b11bb/" style={{ width: 30, height: 30}} target="_blank"/>

     </div>
  )
};

export default Footer;
