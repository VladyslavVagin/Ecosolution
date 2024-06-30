import React from "react";
import { socials } from "../../../data/socialMedia";
import sprite from "../../../images/icons.svg";

const SocialMedia = () => {
  return (
    <>
      {socials.map((social) => (
        <a href={social.link} key={social.id} target="_blank" rel="noreferrer">
          <svg width={24} height={24}>
            <use xlinkHref={`${sprite}#${social.icon}`}></use>
          </svg>
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
