import React from "react";
import portretVincent from "../../Img/portretVincent.jfif";
import mainHeaderImage from "../../Img/mainHeaderImage.jpg";

import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={styles["main-header"]}>
      <div className={styles["main-header-image-background"]}>
        <img
          className={styles["main-header-image"]}
          src={mainHeaderImage}
          alt="Beautiful mountain"
        />
      </div>
      <div className={styles["heading-information"]}>
        <div className={styles["image-background"]}>
          {" "}
          <img
            className={styles.image}
            src={portretVincent}
            alt="Portret of Vincent Beekhuis"
          />
        </div>

        <h1 className={styles["heading-primary"]}>Vincent Beekhuis</h1>
        <p className={styles["heading-secondary"]}>
          Front-end Developer available for work
        </p>
        <p className={styles["heading-tertiary"]}>Apeldoorn, Gelderland</p>
      </div>
    </header>
  );
};

export default Header;
