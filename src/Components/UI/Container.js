import React from "react";
import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <div className={`${styles.container} ${styles[props.className]}`}>
      {props.children}
    </div>
  );
};

export default Container;
