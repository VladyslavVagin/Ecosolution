import React from "react";
import TitleHero from "./TitleHero/TitleHero.jsx";
import TextHero from "./TextHero/TextHero.jsx";
import LearnMoreBtn from "./LearnMoreBtn/LearnMoreBtn.jsx";
import AddressInfo from "./AddressInfo/AddressInfo.jsx";
import { SectionHero, Container, ContentHero } from "./Hero.styled.jsx";

const Hero = () => {
  return (
    <SectionHero>
      <Container>
        <ContentHero>
          <TitleHero />
          <div>
            <TextHero />
            <LearnMoreBtn />
          </div>
        </ContentHero>
        <AddressInfo />
      </Container>
    </SectionHero>
  );
};

export default Hero;
