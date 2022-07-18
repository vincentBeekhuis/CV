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

  const onToggleWerkErvaringHandler = (e) => {
    setWerkErvaringOpened((prevState) => !prevState);
  };

  const onToggleEducatieHandler = (e) => {
    setEducatieOpened((prevState) => !prevState);
  };

  const onToggleIntroductieHandler = (e) => {
    setIntroductieOpened((prevState) => !prevState);
  };

  const onToggleSkillsHandler = (e) => {
    setSkillsOpened((prevState) => !prevState);
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
            onToggleClick={onToggleIntroductieHandler}
          />
        </Container>
        <Container className="right">
          <Skills opened={skillsOpened} onToggleClick={onToggleSkillsHandler} />
        </Container>
      </div>

      <Container>
        <WerkErvaring
          opened={werkErvaringOpened}
          onToggleClick={onToggleWerkErvaringHandler}
        />
      </Container>
      <Container>
        <Educatie
          opened={educatieOpened}
          onToggleClick={onToggleEducatieHandler}
        />
      </Container>
    </>
  );
}

export default App;
