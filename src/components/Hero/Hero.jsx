import React from "react";
import TitleHero from "./TitleHero/TitleHero.jsx";
import TextHero from "./TextHero/TextHero.jsx";
import LearnMoreBtn from "./LearnMoreBtn/LearnMoreBtn.jsx";
import AddressInfo from "./AddressInfo/AddressInfo.jsx";
import HeroImage from "./HeroImage/HeroImage.jsx";
import { SectionHero, ContentHero, TextContainer } from "./Hero.styled.jsx";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
      },
    },
  };

  return (
    <SectionHero
      id="hero"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
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
