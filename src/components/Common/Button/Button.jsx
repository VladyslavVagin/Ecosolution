import React from "react";
import sprite from "../../../images/icons.svg";
import { LinkBtn } from "./Button.styled";

const Button = ({ text, link }) => {
  return (
    <LinkBtn href={link}>
      <p>{text}</p>
        <svg width={16} height={16}>
          <use xlinkHref={`${sprite}#arrow-rightup`}></use>
        </svg>
    </LinkBtn>
  );
};

export default Button;
