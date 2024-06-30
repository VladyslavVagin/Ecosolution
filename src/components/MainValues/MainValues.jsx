import React from "react";
import TitleValues from "./TitleValues/TitleValues";
import TextValues from "./TextValues/TextValues";
import ListValues from "./ListValues/ListValues";
import { Section, TitleContainer } from "./MainValues.styled";

const MainValues = () => {
  return (
    <Section id="about">
      <TitleContainer>
        <TitleValues />
        <TextValues />
      </TitleContainer>
      <ListValues />
    </Section>
  );
};

export default MainValues;
