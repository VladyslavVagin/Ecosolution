import React from "react";
import TitleFAQ from "./TitleFAQ/TitleFAQ";
import ListQuestions from "./ListQuestions/ListQuestions";
import ContactButton from "./ContactButton/ContactButton";
import { FlexContainer, Section } from "./Questions.styled";

const Questions = () => {
  return (
    <Section id="faq">
      <FlexContainer>
        <TitleFAQ />
        <ListQuestions />
      </FlexContainer>
      <ContactButton />
    </Section>
  );
};

export default Questions;
