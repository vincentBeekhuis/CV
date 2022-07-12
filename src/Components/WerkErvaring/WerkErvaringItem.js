import React, { useState } from "react";
import styles from "./WerkErvaringItem.module.css";

const WerkErvaringItem = (props) => {
  const {
    logo,
    startDatum,
    eindDatum,
    werkgever,
    plaats,
    functieTitel,
    functieOmschrijving,
  } = props.functie;

  const startDatumString = startDatum.toLocaleString("nl-NL", {
    timeZone: "CET",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const eindDatumString =
    eindDatum === "heden"
      ? "heden"
      : eindDatum.toLocaleString("nl-NL", {
          timeZone: "CET",
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

  const [itemOpened, setItemOpened] = useState(false);

  const onOpenItemHandler = (e) => {
    setItemOpened(true);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["image-box"]}>
        <img alt="bedrijfslogo" src={logo} className={styles["logo"]} />
      </div>
      <div className={styles["heading-box"]}>
        <h3 className={styles["heading-secondary"]}>{werkgever}</h3>
        <p className={styles["heading-tertiary"]}>{functieTitel}</p>
        <p className={styles["heading-quaternary"]}>
          {`${startDatumString} - ${eindDatumString}`}
        </p>
        <p className={styles["heading-quaternary"]}>{plaats}</p>

        {!itemOpened ? (
          <p className={styles["open-content"]} onClick={onOpenItemHandler}>
            Meer lezen
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={styles["content-box"]}>
        {itemOpened ? (
          <p className={styles["content"]}>{functieOmschrijving}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WerkErvaringItem;
