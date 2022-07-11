import styles from "./Educatie.module.css";
import EducatieItem from "./EducatieItem";

import logoWindesheim from "../../Img/logoWindesheim.png";
import logoEdisonCollege from "../../Img/logoEdisonCollege.png";

const windesheim = {
  logo: logoWindesheim,
  onderwijsInstelling: "Hogeschool Windesheim",
  plaats: "Zwolle",
  opleiding: "HBO-ICT",
  startDatum: new Date(2013, 8, 1),
  eindDatum: new Date(2017, 5, 30),
  afronding: 8,
};

const edisoncollege = {
  logo: logoEdisonCollege,
  onderwijsInstelling: "Edison College",
  plaats: "Apeldoorn",
  opleiding: "HAVO",
  startDatum: new Date(2006, 8, 1),
  eindDatum: new Date(2013, 6, 1),
  afronding: 8,
};

const Educatie = (props) => {
  return (
    <div className={styles["main-container"]}>
      <h2 className={styles["heading-primary"]}>Educatie</h2>
      <EducatieItem opleiding={windesheim} />
      <EducatieItem opleiding={edisoncollege} />
    </div>
  );
};

export default Educatie;
