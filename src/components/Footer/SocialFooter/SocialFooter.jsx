import React from "react";
import SocialMedia from "../../Common/SocialMedia/SocialMedia";
import { GeneralContainer, SocialContainer } from "./SocialFooter.styled";

const SocialFooter = () => {
  return (
    <GeneralContainer>
      <SocialContainer>
        <SocialMedia />
      </SocialContainer>
      <address>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
      </address>
      <div>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      </div>
      <div>
        <p>ecosolution &copy; 2023</p>
      </div>
    </GeneralContainer>
  );
};

export default SocialFooter;
