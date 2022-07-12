import React from "react";
import portretVincent from "../../Img/portretVincent.jfif";
import mainHeaderImage from "../../Img/mainHeaderImage.jpg";
import { IonIcon } from "@ionic/react";
import { callOutline, mailOutline, pinOutline } from "ionicons/icons";

import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={styles["main-header"]}>
      <div className={styles["main-header-image-background"]}>
        <img
          className={styles["main-header-image"]}
          src={mainHeaderImage}
          alt="House in snowy area  "
        />
      </div>
      <div className={styles["heading-information"]}>
        <div className={styles["heading-left"]}>
          <div className={styles["heading-image"]}>
            <div className={styles["image-background"]}>
              <img
                className={styles.image}
                src={portretVincent}
                alt="Portret of Vincent Beekhuis"
              />
            </div>
          </div>
          <h1 className={styles["heading-primary"]}>Vincent Beekhuis</h1>
          <p className={styles["heading-secondary"]}>
            Front-end Developer available for work
          </p>
          <p className={styles["heading-tertiary"]}>Apeldoorn, Gelderland</p>
        </div>
        <div className={styles["contacts"]}>
          <div className={styles["contacts-detail"]}>
            <IonIcon className={styles["contacts-icon"]} icon={callOutline} />
            <span>06-52264443</span>
          </div>
          <div className={styles["contacts-detail"]}>
            <IonIcon className={styles["contacts-icon"]} icon={mailOutline} />
            <span>v.beekhuis@hotmail.com</span>
          </div>
          <div className={styles["contacts-detail"]}>
            <IonIcon className={styles["contacts-icon"]} icon={pinOutline} />
            <span>Loseweg 75, 7315BD, Apeldoorn</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
