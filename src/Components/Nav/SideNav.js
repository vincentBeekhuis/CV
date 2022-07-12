import React from "react";
import styles from "./SideNav.module.css";

import NavItem from "./NavItem";
const SideNav = (props) => {
  return (
    <>
      <div className={styles["side-nav-bar"]}>
        {/* <button>X</button> */}
        <ul className={styles["side-nav"]}>
          <NavItem name="introductie" onClick={props.onClick}>
            + Introductie
          </NavItem>
          <NavItem name="ervaring" onClick={props.onClick}>
            {!props.ervaringOpened ? `+` : "-"} Werk Ervaring
          </NavItem>
          <NavItem name="educatie" onClick={props.onClick}>
            {!props.educatieOpened ? `+` : "-"} Educatie
          </NavItem>
          <NavItem name="skills" onClick={props.onClick}>
            + Skills
          </NavItem>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
