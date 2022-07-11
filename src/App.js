import React, { useRef } from "react";

import Container from "./Components/UI/Container";
import Header from "./Components/Header/Header";
import WerkErvaring from "./Components/WerkErvaring/WerkErvaring";
import Educatie from "./Components/Educatie/Educatie";
import SideNav from "./Components/Nav/SideNav";

function App() {
  const smooth = { behavior: "smooth" };
  const onNavClickHandler = (e) => {
    const target = e.target.getAttribute("data-name");
    if (target === "ervaring") {
      ervaringRef.current.scrollIntoView(smooth);
    }
    if (target === "educatie") {
      educatieRef.current.scrollIntoView(smooth);
    }
  };
  const ervaringRef = useRef();
  const educatieRef = useRef();

  return (
    <>
      <Container>
        <Header />
        <SideNav onClick={onNavClickHandler} />
      </Container>
      <Container>
        <WerkErvaring ref={ervaringRef} />
      </Container>
      <Container>
        <Educatie ref={educatieRef} />
      </Container>
    </>
  );
}

export default App;
