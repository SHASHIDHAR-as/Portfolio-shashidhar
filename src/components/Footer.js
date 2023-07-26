import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
        <a href="https://www.instagram.com/shashidhar__koundinya_09/">< InstagramIcon/></a>
        <a href="https://www.linkedin.com/in/shashidhar-as-1a7a94203/"><LinkedInIcon /></a>
        <a href="https://twitter.com/As_Shashidhar"><TwitterIcon /></a>
      </div>
      <p> &copy; 2023 shashidhar koundinya</p>
    </div>
  );
}

export default Footer;
