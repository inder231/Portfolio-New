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
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Aiming to leverage the proven knowledge of web development. Looking
          forward to joining a company where I will be able to contribute
          towards individual and company growth. <br />
          <br /> Curious and enjoy work that challenges me to learn something
          new and stretch in a different direction. and I am
          <span style={{ color: `#00a0a0` }}>
            {" "}
            looking for an opportunity as a full-stack web developer.
            <br />
          </span>
          <br />
          Apart from coding, some other activities that I like to do!
          <ul>
            <li className="about-activity">Running</li>
            <li className="about-activity">Volleyball</li>
            <li className="about-activity">Badminton</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
