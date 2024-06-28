import React from "react";
import TitleValues from "./TitleValues/TitleValues";
import TextValues from "./TextValues/TextValues";
import { TitleContainer } from "./MainValues.styled";

const MainValues = () => {
  return (
    <section>
      <TitleContainer>
        <TitleValues />
        <TextValues />
      </TitleContainer>
    </section>
  );
};

export default MainValues;
