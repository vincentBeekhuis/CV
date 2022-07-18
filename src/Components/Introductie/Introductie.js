import React from "react";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

import styles from "./Introductie.module.css";
import "./../../Styles/general.css";

const Introductie = (props) => {
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
        title={!opened ? "Open introductie" : "Sluit introductie"}
      ></div>
      <div className="flex-container">
        <h2 className="heading-primary">Introductie</h2>
        <IonIcon
          className="open-icon"
          title="Open/Close item"
          icon={!opened ? addOutline : removeOutline}
        />
      </div>
      {opened && (
        <div className={styles["content"]}>
          <p>
            Hi, mijn naam is Vincent Beekhuis. Ik ben een 28-jarige IT'er die op
            zoek is naar een functie als Front-end Developer. Met vier jaar
            werkervaring als BI-consultant en twee jaar werkervaring als
            low-code developer, breng ik veel nuttige ervaring met mij mee. Ik
            weet als geen ander hoe bedrijven werken en ik weet wensen van
            klanten goed om te zetten in duidelijk gedefinieerde user stories en
            requirements. Na deze werkervaring heb ik mijn passie gevonden in
            (front-end) development en daarom ben ik toe aan een carrièreswitch.
          </p>
          <br />
          <p>
            Samen met mijn vriendin woon ik in een prachtig huis in het mooie
            Apeldoorn, op steenworpafstand van Kroondomein Het Loo. In mijn
            vrije tijd wandel ik dan ook graag door de mooie tuinen en bossen
            die hier deel van uit maken. Verder ben ik echt een sportliefhebber
            - maar dan vooral om het te kijken.
          </p>
          <br />
          <p>
            Wil je meer over mij weten of denk jij de perfecte functie voor mij
            te hebben? Schroom dan niet om contact met mij op te nemen via de
            telefoon of mail.
          </p>
        </div>
      )}
    </div>
  );
};

export default Introductie;
