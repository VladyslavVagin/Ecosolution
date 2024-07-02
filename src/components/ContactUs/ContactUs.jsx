import React from "react";
import ContactTitle from "./ContactTitle/ContactTitle";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
import { FlexContainer } from "./ContactUs.styled";

const ContactUs = () => {
  return (
    <section id="contacts">
      <ContactTitle />
      <FlexContainer>
        <ContactInfo />
        <ContactForm />
      </FlexContainer>
    </section>
  );
};

export default ContactUs;
