import React from "react";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

import styles from "./Skills.module.css";
import "./../../Styles/general.css";

const hardSkills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "SQL",
  "Git",
  "PowerBI",
  "SCRUM",
];
const softSkills = [
  "Harmonieus",
  "Doorzetter",
  "Analytisch",
  "Leergierig",
  "Zelfstandig",
  "Teamplayer",
  "Perfectionist",
  "Creatief",
];

const listSkills = (skillArr) => {
  return skillArr.map((skill) => <li key={skill}>{skill}</li>);
};

const Skills = (props) => {
  const { opened, onToggleClick } = props;

  return (
    <div
      className={`${styles["main-container"]} ${
        opened && styles["opened"]
      } main-container`}
    >
      <div
        className="clickable-container"
        onClick={onToggleClick}
        title={!opened ? "Open skills" : "Sluit skills"}
      ></div>
      <div className="flex-container">
        <h2 className="heading-primary">Skills</h2>
        <span title={!opened ? "Open skills" : "Sluit skills"}>
          <IonIcon
            className="open-icon"
            title="Open/Close item"
            icon={!opened ? addOutline : removeOutline}
          />
        </span>
      </div>
      {opened && (
        <div className={styles["skills-container"]}>
          <div>
            <h3 className={styles["heading-secondary"]}>Hard Skills</h3>
            <ul className={styles["list"]}>{listSkills(hardSkills)}</ul>
          </div>
          <div className={styles["line"]}></div>
          <div>
            <h3 className={styles["heading-secondary"]}>Soft Skills</h3>
            <ul className={styles["list"]}>{listSkills(softSkills)}</ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
