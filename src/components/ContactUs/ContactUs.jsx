import React from "react";
import ContactTitle from "./ContactTitle/ContactTitle";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
import { FlexContainer, Section } from "./ContactUs.styled";

const ContactUs = () => {
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
      id="contacts"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <ContactTitle />
      <FlexContainer>
        <ContactInfo />
        <ContactForm />
      </FlexContainer>
    </Section>
  );
};

export default ContactUs;
