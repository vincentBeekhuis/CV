import React from "react";

import Container from "./Components/UI/Container";
// import SideNav from "./Components/Nav/SideNav";
import Header from "./Components/Header/Header";

// import styles from "./App.module.css";
import WerkErvaring from "./Components/WerkErvaring/WerkErvaring";
import Educatie from "./Components/Educatie/Educatie";
import SideNav from "./Components/Nav/SideNav";

function App() {
  const onNavClickHandler = (e) => {
    console.log(e.target.getAttribute("data-name"));
  };

  return (
    <>
      <Container>
        <Header />
        <SideNav onClick={onNavClickHandler} />
      </Container>
      <Container>
        <WerkErvaring />
      </Container>
      <Container>
        <Educatie />
      </Container>
    </>
  );
}

export default App;
