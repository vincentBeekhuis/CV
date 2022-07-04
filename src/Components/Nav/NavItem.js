import React from "react";
import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return <li className={styles["nav-item"]}>{props.children}</li>;
};

export default NavItem;
