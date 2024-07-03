import React from "react";
import TitleValues from "./TitleValues/TitleValues";
import TextValues from "./TextValues/TextValues";
import ListValues from "./ListValues/ListValues";
import { Section, TextContainer, TitleContainer } from "./MainValues.styled";

const MainValues = () => {
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
    <Section
      id="about"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <TitleContainer>
        <TitleValues />
        <TextContainer>
          <TextValues />
        </TextContainer>
      </TitleContainer>
      <ListValues />
    </Section>
  );
};

export default MainValues;
