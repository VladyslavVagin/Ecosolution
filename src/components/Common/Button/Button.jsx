import React from "react";
import sprite from "../../../images/icons.svg";
import { LinkBtn } from "./Button.styled";

const Button = ({ text, link }) => {
  return (
    <LinkBtn href={link}>
      <p>{text}</p>
        <svg width={15} height={15}>
          <use xlinkHref={`${sprite}#icon-btn-arrow-down`}></use>
        </svg>
    </LinkBtn>
  );
};

export default Button;
