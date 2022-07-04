import React from "react";

import Container from "./Components/UI/Container";
import SideNav from "./Components/Nav/SideNav";

import styles from "./App.module.css";

function App() {
  return (
    <div className={`${styles.grid} ${styles["grid__3-cols"]}`}>
      <SideNav />
      <Container>Test</Container>
    </div>
  );
}

export default App;
