import React from "react";
import styles from "./SideNav.module.css";

import NavItem from "./NavItem";
const SideNav = (props) => {
  return (
    <>
      <div className={styles["side-nav-bar"]}>
        {/* <button>X</button> */}
        <ul className={styles["side-nav"]}>
          <NavItem> > Introduction</NavItem>
          <NavItem> > Education</NavItem>
          <NavItem> > Work Experience</NavItem>
          <NavItem> > Skills</NavItem>
          <NavItem> > Contact</NavItem>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
