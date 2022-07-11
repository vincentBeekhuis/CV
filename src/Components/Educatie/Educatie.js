import React, { forwardRef, useState } from "react";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

import styles from "./Educatie.module.css";
import EducatieItem from "./EducatieItem";

import logoWindesheim from "../../Img/logoWindesheim.png";
import logoEdisonCollege from "../../Img/logoEdisonCollege.png";
import logoCambridge from "../../Img/logoCambridge.jpg";

const windesheim = {
  logo: logoWindesheim,
  onderwijsInstelling: "Hogeschool Windesheim",
  plaats: "Zwolle",
  opleiding: "HBO-ICT",
  startDatum: new Date(2013, 8, 1),
  eindDatum: new Date(2017, 5, 30),
};

const edisoncollege = {
  logo: logoEdisonCollege,
  onderwijsInstelling: "Edison College",
  plaats: "Apeldoorn",
  opleiding: "HAVO",
  startDatum: new Date(2006, 8, 1),
  eindDatum: new Date(2013, 5, 30),
};

const cambridge = {
  logo: logoCambridge,
  onderwijsInstelling: "Cambridge University",
  plaats: "",
  opleiding: "C2 (Proficiency)",
  startDatum: new Date(2014, 8, 1),
  eindDatum: new Date(2015, 5, 30),
};
const educatieArr = [windesheim, cambridge, edisoncollege];
const Educatie = forwardRef((props, ref) => {
  const [opened, setOpened] = useState(false);

  const onOpenItemHandler = (e) => {
    setOpened(true);
  };

  const onCloseItemHandler = (e) => {
    setOpened(false);
  };
  return (
    <div
      ref={ref}
      onClick={!opened ? onOpenItemHandler : undefined}
      className={styles["main-container"]}
    >
      <div className={styles["flex-container"]}>
        <h2 className={styles["heading-primary"]}>Educatie</h2>
        <span
          title={!opened ? "Open ervaring" : "Sluit ervaring"}
          onClick={opened ? onCloseItemHandler : undefined}
        >
          <IonIcon
            className={styles["open-icon"]}
            title="Open/Close item"
            icon={!opened ? addOutline : removeOutline}
          />
        </span>
      </div>
      {opened &&
        educatieArr.map((opleiding) => (
          <EducatieItem opleiding={opleiding} key={opleiding.opleiding} />
        ))}
    </div>
  );
});

export default Educatie;
