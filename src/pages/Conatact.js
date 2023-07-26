import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact">
      
      <div className="socialMedias">
          <a href="https://www.linkedin.com/feed/"><LinkedInIcon /></a>
          <a href="mailto:shashidhar.shivaraj715@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/SHASHIDHAR-as"><GithubIcon /></a>
            
        </div>
        </div>
  );
}

export default Contact;
