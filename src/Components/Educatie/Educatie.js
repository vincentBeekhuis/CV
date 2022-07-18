import React from "react";
import EducatieItem from "./EducatieItem";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

import logoWindesheim from "../../Img/logoWindesheim.png";
import logoHonours from "../../Img/logoHonours.jpg";
import logoCambridge from "../../Img/logoCambridge.webp";
import logoEdisonCollege from "../../Img/logoEdisonCollege.png";

// import styles from "./Educatie.module.css";
import "./../../Styles/general.css";

const windesheim = {
  logo: logoWindesheim,
  onderwijsInstelling: "Hogeschool Windesheim",
  plaats: "Zwolle",
  opleiding: "HBO-ICT",
  startDatum: new Date(2013, 8, 1),
  eindDatum: new Date(2017, 5, 30),
};

const honours = {
  logo: logoHonours,
  onderwijsInstelling: "Honours Programme",
  plaats: "Zwolle",
  opleiding: "Intergenerational Collaboration",
  startDatum: new Date(2014, 8, 1),
  eindDatum: new Date(2015, 5, 30),
};
const cambridge = {
  logo: logoCambridge,
  onderwijsInstelling: "Cambridge University",
  plaats: "",
  opleiding: "C2 (Proficiency)",
  startDatum: new Date(2014, 8, 1),
  eindDatum: new Date(2015, 5, 30),
};
const edisoncollege = {
  logo: logoEdisonCollege,
  onderwijsInstelling: "Edison College",
  plaats: "Apeldoorn",
  opleiding: "HAVO",
  startDatum: new Date(2006, 8, 1),
  eindDatum: new Date(2013, 5, 30),
};

const educatieArr = [windesheim, honours, cambridge, edisoncollege];
const Educatie = (props) => {
  const { opened, onToggleClick } = props;
  return (
    <div className="main-container">
      <div
        className="clickable-container"
        onClick={onToggleClick}
        title={!opened ? "Open educatie" : "Sluit educatie"}
      ></div>
      <div className="flex-container">
        <h2 className="heading-primary">Educatie</h2>

        <IonIcon
          className="open-icon"
          title="Open/Close item"
          icon={!opened ? addOutline : removeOutline}
        />
      </div>
      {opened &&
        educatieArr.map((opleiding) => (
          <EducatieItem opleiding={opleiding} key={opleiding.opleiding} />
        ))}
    </div>
  );
};

export default Educatie;
