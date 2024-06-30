import React from "react";
import TitleFAQ from "./TitleFAQ/TitleFAQ";
import ListQuestions from "./ListQuestions/ListQuestions";
import ContactButton from "./ContactButton/ContactButton";
import { Section } from "./Questions.styled";

const Questions = () => {
  return (
    <Section id="faq">
      <TitleFAQ />
      <ListQuestions />
      <ContactButton />
    </Section>
  );
};

export default Questions;
