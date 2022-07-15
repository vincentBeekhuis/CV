import React, { useState } from "react";

import Container from "./Components/UI/Container";
import Header from "./Components/Header/Header";
import WerkErvaring from "./Components/WerkErvaring/WerkErvaring";
import Educatie from "./Components/Educatie/Educatie";
import Introductie from "./Components/Introductie/Introductie";
import Skills from "./Components/Skills/Skills";

import styles from "./App.module.css";
// import SideNav from "./Components/Nav/SideNav";

function App() {
  const [werkErvaringOpened, setWerkErvaringOpened] = useState(false);
  const [educatieOpened, setEducatieOpened] = useState(false);
  const [introductieOpened, setIntroductieOpened] = useState(true);
  const [skillsOpened, setSkillsOpened] = useState(true);

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
  const onOpenIntroductieHandler = (e) => {
    setIntroductieOpened(true);
  };
  const onCloseIntroductieHandler = (e) => {
    setIntroductieOpened(false);
  };
  const onOpenSkillsHandler = (e) => {
    setSkillsOpened(true);
  };
  const onCloseSkillsHandler = (e) => {
    setSkillsOpened(false);
  };

  return (
    <>
      <Container className="top">
        <Header />
      </Container>
      <div
        className={`${styles["flex-container"]} ${
          introductieOpened && skillsOpened
            ? styles["opened"]
            : styles["closed"]
        }`}
      >
        <Container className="left">
          <Introductie
            opened={introductieOpened}
            onOpenClick={onOpenIntroductieHandler}
            onCloseClick={onCloseIntroductieHandler}
          />
        </Container>
        <Container className="right">
          <Skills
            opened={skillsOpened}
            onOpenClick={onOpenSkillsHandler}
            onCloseClick={onCloseSkillsHandler}
          />
        </Container>
      </div>

      <Container>
        <WerkErvaring
          opened={werkErvaringOpened}
          onOpenClick={onOpenWerkErvaringHandler}
          onCloseClick={onCloseWerkErvaringHandler}
        />
      </Container>
      <Container>
        <Educatie
          opened={educatieOpened}
          onOpenClick={onOpenEducatieHandler}
          onCloseClick={onCloseEducatieHandler}
        />
      </Container>
    </>
  );
}

export default App;
