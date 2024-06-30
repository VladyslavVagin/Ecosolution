import React from "react";
import ContactTitle from "./ContactTitle/ContactTitle";
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactUs = () => {
  return (
    <section id="contacts">
      <ContactTitle />
      <div>
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactUs;
