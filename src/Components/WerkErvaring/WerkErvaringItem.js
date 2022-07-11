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

  // const startDatumString = startDatum.toLocaleString("nl-NL", {
  //   timeZone: "CET",
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  // });
  // const eindDatumString =
  //   eindDatum === "heden"
  //     ? "heden"
  //     : eindDatum.toLocaleString("nl-NL", {
  //         timeZone: "CET",
  //         day: "2-digit",
  //         month: "short",
  //         year: "numeric",
  //       });

  const [itemOpened, setItemOpened] = useState(false);

  const onOpenItemHandler = (e) => {
    setItemOpened(true);
  };

  return (
    <div className={styles["container"]}>
      <img alt="bedrijfslogo" src={logo} className={styles["logo"]} />
      <div>
        <h3 className={styles["heading-secondary"]}>{werkgever}</h3>
        <p className={styles["heading-tertiary"]}>{functieTitel}</p>
        <p className={styles["heading-quaternary"]}>
          {`${props.startDatum} - ${props.eindDatum}`}
        </p>
        <p className={styles["heading-quaternary"]}>{plaats}</p>

        {!itemOpened ? (
          <p className={styles["open-content"]} onClick={onOpenItemHandler}>
            Meer lezen
          </p>
        ) : (
          ""
        )}
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
