import React from "react";
import ContactTitle from "./ContactTitle/ContactTitle";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <section id="contacts">
      <ContactTitle />
      <div>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
