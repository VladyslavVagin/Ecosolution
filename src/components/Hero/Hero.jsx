import React from "react";
import TitleHero from "./TitleHero/TitleHero.jsx";
import TextHero from "./TextHero/TextHero.jsx";
import LearnMoreBtn from "./LearnMoreBtn/LearnMoreBtn.jsx";
import AddressInfo from "./AddressInfo/AddressInfo.jsx";
import HeroImage from "./HeroImage/HeroImage.jsx";
import { SectionHero, ContentHero, TextContainer } from "./Hero.styled.jsx";

const Hero = () => {
  return (
    <SectionHero id="hero">
        <ContentHero>
          <TitleHero />
          <TextContainer>
            <TextHero />
            <LearnMoreBtn /> 
          </TextContainer>
        </ContentHero>
        <AddressInfo />
        <HeroImage />
    </SectionHero>
  );
};

export default Hero;
