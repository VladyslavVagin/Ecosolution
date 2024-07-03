import React from "react";
import TitleFAQ from "./TitleFAQ/TitleFAQ";
import ListQuestions from "./ListQuestions/ListQuestions";
import ContactButton from "./ContactButton/ContactButton";
import { FlexContainer, Section } from "./Questions.styled";

const Questions = () => {
  
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
      id="faq"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <FlexContainer>
        <TitleFAQ />
        <ListQuestions />
      </FlexContainer>
      <ContactButton />
    </Section>
  );
};

export default Questions;
