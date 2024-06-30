import React from "react";
import Logo from "../../Header/Logo/Logo";
import sprite from "../../../images/icons.svg";
import { FlexContainer } from "./LogoFooter.styled";

const LogoFooter = () => {
  return (
    <FlexContainer>
      <Logo />
      <a href="#hero" aria-label="Go up to Hero section">
        <svg width={32} height={32}>
          <use xlinkHref={`${sprite}#icon-arrow-up-right`}></use>
        </svg>
      </a>
    </FlexContainer>
  );
};

export default LogoFooter;
