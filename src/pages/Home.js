import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shashidhar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/feed/"><LinkedInIcon /></a>
          <a href="mailto:shashidhar.shivaraj715@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/SHASHIDHAR-as"><GithubIcon /></a>
          
          
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS,  BootStrap, MaterialUI, 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, 
              MySQL, MongoDB,
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
        <div className="skillc">
        <img src="https://cdn.sanity.io/images/z5xqwyv9/production/6e2ddbe42abeca567cb54e6316b536c2b4276fd7-233x216.jpg" alt="mern" />
        <img src="https://cdn.sanity.io/images/z5xqwyv9/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png" alt="error" />
        <img src="https://cdn.sanity.io/images/z5xqwyv9/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png" alt="error" />
        <img src="https://cdn.sanity.io/images/z5xqwyv9/production/f862daba9c3da2e673249abae41d7f068d37976f-518x518.png" alt="error" />
        <img src="https://cdn.sanity.io/images/z5xqwyv9/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png" alt="error" />
        
        </div>
      </div>
    </div>
  );
}

export default Home;
