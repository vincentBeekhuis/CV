import React, { useRef, useState } from "react";

import Container from "./Components/UI/Container";
import Header from "./Components/Header/Header";
import WerkErvaring from "./Components/WerkErvaring/WerkErvaring";
import Educatie from "./Components/Educatie/Educatie";
import SideNav from "./Components/Nav/SideNav";

function App() {
  const [werkErvaringOpened, setWerkErvaringOpened] = useState(false);
  const [educatieOpened, setEducatieOpened] = useState(false);

  const onOpenWerkErvaringHandler = (e) => {
    setWerkErvaringOpened(true);
  };
  const onCloseWerkErvaringHandler = (e) => {
    setWerkErvaringOpened(false);
  };

  const onOpenEducatieHandler = (e) => {
    setEducatieOpened(true);
  };

  const onCloseEducatieHandler = (e) => {
    setEducatieOpened(false);
  };

  const smooth = { behavior: "smooth" };
  const onNavClickHandler = (e) => {
    const target = e.target.getAttribute("data-name");
    if (target === "ervaring") {
      setWerkErvaringOpened(true);
      setTimeout(() => {
        ervaringRef.current.scrollIntoView(smooth);
      }, 0);
    }
    if (target === "educatie") {
      setEducatieOpened(true);
      setTimeout(() => {
        educatieRef.current.scrollIntoView(smooth);
      }, 0);
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
        <WerkErvaring
          ref={ervaringRef}
          opened={werkErvaringOpened}
          onOpenClick={onOpenWerkErvaringHandler}
          onCloseClick={onCloseWerkErvaringHandler}
        />
      </Container>
      <Container>
        <Educatie
          ref={educatieRef}
          opened={educatieOpened}
          onOpenClick={onOpenEducatieHandler}
          onCloseClick={onCloseEducatieHandler}
        />
      </Container>
    </>
  );
}

export default App;
