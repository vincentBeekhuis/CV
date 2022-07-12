import React, { forwardRef } from "react";
import styles from "./WerkErvaring.module.css";
import WerkErvaringItem from "./WerkErvaringItem";
import logoHSO from "../../Img/logoHSO.png";
import logoThinkwise from "../../Img/logoThinkwise.png";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

const hso = {
  logo: logoHSO,
  startDatum: new Date(2018, 4, 1),
  eindDatum: "heden",
  werkgever: "HSO",
  functieTitel: "BI Consultant",
  plaats: "Veenendaal",
  functieOmschrijving:
    "Als BI Consultant bij HSO begeleidde ik klanten in hun Data Journey. Ik zorgde er met mijn collega's voor dat klanten de waarde van hun data gingen inzien, om zo op basis van data bedrijfskritische keuzes te maken, in plaats van op gevoel. Ik zorgde ervoor dat data op de juiste manier werd ontsloten uit bronsystemen, maar ook dat het op de juiste manier aan de eindgebruikers werd getoond. De voornamelijkste skill die ik in deze functie heb geleerd: Wensen van de klant doorgronden en omzetten in duidelijke requirements. ",
};

const thinkwise = {
  logo: logoThinkwise,
  startDatum: new Date(2016, 1, 1),
  eindDatum: new Date(2018, 3, 30),
  werkgever: "Thinkwise",
  functieTitel: "Software Modernization Specialist",
  plaats: "Apeldoorn",
  functieOmschrijving:
    "Als Software Modernization Specialist bij Thinkwise zorgde ik ervoor dat prospects in de pre-sales fase een op maat gemaakte demo konden ervaren. Ik stuurde een team aan van gemiddeld 4 low-code developers. ",
};

const WerkErvaring = forwardRef((props, ref) => {
  const { opened, onOpenClick, onCloseClick } = props;

  return (
    <div
      ref={ref}
      onClick={!opened ? onOpenClick : undefined}
      className={styles["main-container"]}
    >
      <div className={styles["flex-container"]}>
        <h2 className={styles["heading-primary"]}>Ervaring</h2>
        <span
          onClick={opened ? onCloseClick : undefined}
          title={!opened ? "Open ervaring" : "Sluit ervaring"}
        >
          <IonIcon
            className={styles["open-icon"]}
            title="Open/Close item"
            icon={!opened ? addOutline : removeOutline}
          />
        </span>
      </div>
      {opened && <WerkErvaringItem functie={hso} />}
      {opened && <WerkErvaringItem functie={thinkwise} />}
    </div>
  );
});

export default WerkErvaring;
