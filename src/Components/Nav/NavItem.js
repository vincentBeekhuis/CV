import React from "react";
import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li
      data-name={props.name}
      onClick={props.onClick}
      className={styles["nav-item"]}
    >
      {props.children}
    </li>
  );
};

export default NavItem;
