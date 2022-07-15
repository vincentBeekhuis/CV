import React from "react";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";
import styles from "./Skills.module.css";

const Skills = (props) => {
  const { opened, onOpenClick, onCloseClick } = props;

  return (
    <div
      onClick={!opened ? onOpenClick : undefined}
      className={`${styles["main-container"]} ${opened && styles["opened"]}`}
    >
      <div className={styles["flex-container"]}>
        <h2 className={styles["heading-primary"]}>Skills</h2>
        <span
          title={!opened ? "Open skills" : "Sluit skills"}
          onClick={opened ? onCloseClick : undefined}
        >
          <IonIcon
            className={styles["open-icon"]}
            title="Open/Close item"
            icon={!opened ? addOutline : removeOutline}
          />
        </span>
      </div>
      {opened && (
        <div className={styles["skills-container"]}>
          <div>
            <h3 className={styles["heading-secondary"]}>Hard Skills</h3>
            <ul className={styles["list"]}>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Git</li>
              <li>PowerBI</li>
              <li>SCRUM</li>
            </ul>
          </div>
          <div className={styles["line"]}></div>
          <div>
            <h3 className={styles["heading-secondary"]}>Soft Skills</h3>
            <ul className={styles["list"]}>
              <li>Harmonieus</li>
              <li>Doorzetter</li>
              <li>Analytisch</li>
              <li>Leergierig</li>
              <li>Zelfstandig</li>
              <li>Teamplayer</li>
              <li>Perfectionist</li>
              <li>Creatief</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
