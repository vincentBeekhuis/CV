import React from "react";
import styles from "./EducatieItem.module.css";

const EducatieItem = (props) => {
  const {
    logo,
    startDatum,
    eindDatum,
    onderwijsInstelling,
    plaats,
    opleiding,
  } = props.opleiding;

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

  return (
    <div className={styles["container"]}>
      <img
        alt="logo onderwijsinstelling"
        src={logo}
        className={styles["logo"]}
      />
      <div>
        <h3 className={styles["heading-secondary"]}>{onderwijsInstelling}</h3>
        <p className={styles["heading-tertiary"]}>{opleiding}</p>
        <p className={styles["heading-quaternary"]}>
          {`${props.startDatum} - ${props.eindDatum}`}
        </p>
        <p className={styles["heading-quaternary"]}>{plaats}</p>
      </div>
    </div>
  );
};

export default EducatieItem;
