import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";



const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  
  return (
    <div
      className={styles.container}
      style={{boxShadow: `3px 3px 5px ${newTheme.line}`}}
    >
      <div className={styles.first}>
        <img
          src={
            // "https://github.com/Swapnil1296/portfolio_images/blob/main/images/developer.gif?raw=true"
            "https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2021/02/download.jpg"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{color: `${newTheme.title}`}} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{color: `${newTheme.para}`}} className={styles.aboutMe}>
        Hello! My name is Inder Pal and loves to learn new things and enhance my skills. <br/>
        I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript <br />
          <br /> I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. and I am
          <span style={{color: `#00a0a0`}}>
            {" "}
            looking for an opportunity as a full-stack web developer.<br/>
          </span>
          
            <br/>
            Apart from coding, some other activities that I love to do!
            <ul>
            <li className="about-activity">
               Running
            </li>
            <li className="about-activity">
               Volleyball
            </li>
            <li className="about-activity">
               Badminton
            </li>
          </ul>
          
        </p>
      </div>
    </div>
  );
};

export default About;