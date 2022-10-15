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
          forward to joining a company to contribute
          towards individual and company growth. <br />
          <br /> Curious and enjoy working on challenging projects and learn new technologies to stretch in a different directions. 
          <span style={{ color: `#00a0a0` }}>
            {" "}
            Looking for an opportunity as a full-stack web developer.
            <br />
          </span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
