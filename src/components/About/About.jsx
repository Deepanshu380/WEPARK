import React from "react";
import { Container } from "@material-ui/core";

import Heading from "./Heading";
import AboutPara from "./AboutPara";
import LiveFacts from "./LiveFacts";
import Members from "./Members";


const About = () => {
  return (
    <>
    
      <Container>
        <Heading text="  WEPAЯK" align="center" margin="6rem" font="bold" />
        <AboutPara />
      </Container>

      <Container style={{ marginBottom: "4rem" }}>
        <Members />
      </Container>

      <Container style={{ backgroundColor: "#f1f1f1", paddingTop: "3rem" }}>
        <Heading text="Live Facts" align="left" margin="2rem" font="bold" />
        <LiveFacts />
      </Container>
    </>
  );
};

export default About;
