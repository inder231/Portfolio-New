import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./TechStacks.module.css";
import GitHubCalendar from "react-github-calendar";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiRedux, SiExpress } from "react-icons/si";

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Skills
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <DiHtml5 />
          <span>HTML</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <DiCss3 />
          <span>CSS</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <DiJavascript1 />
          <span>Javascript</span>
        </div>

        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <DiReact />
          <span>React</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#7248B6" }} className="devicon-redux-original" />
          <SiRedux />
          <span>Redux</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <DiNodejs />
          <span>Node</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-express-original" />
          <SiExpress />
          <span>Express</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <DiMongodb />
          <span>MongoDB</span>
        </div>

        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
            height: "100px",
          }}
          className={styles.logoWrapper}
        >
          <DiGit />

          <span>Git</span>
        </div>
      </div>
      <div className={styles.githubcalender} >
        <GitHubCalendar
          username="Inder-Pal-github"
          year={new Date().getFullYear()}
        />
      </div>
    </div>
  );
};

export default TechStacks;
