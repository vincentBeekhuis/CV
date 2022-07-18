import React from "react";
import WerkErvaringItem from "./WerkErvaringItem";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

import logoHSO from "../../Img/logoHSO.png";
import logoThinkwise from "../../Img/logoThinkwise.png";

import "./../../Styles/general.css";

const hso = {
  logo: logoHSO,
  startDatum: new Date(2018, 4, 1),
  eindDatum: "heden",
  werkgever: "HSO",
  functieTitel: "BI Consultant",
  plaats: "Veenendaal",
  functieOmschrijving1: `Als BI Consultant bij HSO begeleidde ik klanten in hun Data Journey. Ik zorgde er met mijn collega's voor dat klanten de waarde van hun data gingen inzien, om zo op basis van data bedrijfskritische keuzes te maken, in plaats van op gevoel.`,
  functieOmschrijving2: `Ik was van begin, tot het einde van projecten betrokken. Ik deed de verkennende gesprekken met prospects en reeds bestaande klanten om te kijken waar mogelijkheden zaten in hun data. Daarna verzorgde ik een uitgebreide analyse voor een goede inschatting van de hoeveelheid benodige uren. Technisch gezien zorgde ik ervoor dat data op de juiste manier werd ontsloten uit bronsystemen, maar ook dat de data kwaliteit van hoog niveau was. Ten slotte zorgde ik ervoor dat de data op de juiste manieren aan de eindgebruikers werd getoond. De voornamelijkste skill die ik in deze functie heb geleerd: Wensen van de klant doorgronden en omzetten in duidelijke requirements.`,
};

const thinkwise = {
  logo: logoThinkwise,
  startDatum: new Date(2016, 1, 1),
  eindDatum: new Date(2018, 3, 30),
  werkgever: "Thinkwise",
  functieTitel: "Software Modernization Specialist",
  plaats: "Apeldoorn",
  functieOmschrijving1:
    "Als Software Modernization Specialist bij Thinkwise zorgde ik ervoor dat prospects in de pre-sales fase een op maat gemaakte demo ERP applicatie konden ervaren. Door middel van low-code development konden we in zeer korte tijd een applicatie maken die één deel van het ERP-systeem van de klant besloeg. Ik was betrokken bij het ontwikkelen van deze demo-applicaties van begin tot eind.",
  functieOmschrijving2:
    "Tijdens de analysefase zorgde ik ervoor dat we zoveel mogelijk te weten kwamen over de wensen van de klant en de requirements voor het deel van het ERP-systeem dat wij gingen maken. Ook maakte ik tijdens de analysefase een ontwerp van de applicatie en het bijbehorende datamodel. Tijdens de ontwikkelfase stuurde ik, naast het zelf ontwikkelen, een team aan van gemiddeld 4 low-code developers en controleerde het werk wat zij opleverden. De belangrijkste skill die ik in deze functie heb geleerd: Samenwerken met een team van developers aan één applicatie.",
};

const werkErvaringList = [hso, thinkwise];

const WerkErvaring = (props) => {
  const { opened, onToggleClick } = props;

  return (
    <div className="main-container">
      <div
        className="clickable-container"
        onClick={onToggleClick}
        title={!opened ? "Open werkervaring" : "Sluit werkervaring"}
      ></div>
      <div className="flex-container">
        <h2 className="heading-primary">Ervaring</h2>
        <IonIcon
          className="open-icon"
          title="Open/Close item"
          icon={!opened ? addOutline : removeOutline}
        />
      </div>
      {opened &&
        werkErvaringList.map((ervaring) => (
          <WerkErvaringItem functie={ervaring} key={ervaring} />
        ))}
    </div>
  );
};

export default WerkErvaring;
