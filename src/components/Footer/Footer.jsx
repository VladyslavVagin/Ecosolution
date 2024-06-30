import React from "react";
import Container from "../Common/Container/Container";
import LogoFooter from "./LogoFooter/LogoFooter";
import SocialFooter from "./SocialFooter/SocialFooter";
import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LogoFooter />
        <SocialFooter />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
