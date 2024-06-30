import React from "react";
import { links } from "../../../data/menu";
import sprite from "../../../images/icons.svg";
import { NavList } from "./Menu.styled";

const Menu = () => {
  return (
    <NavList>
      {links.map((link) => (
        <a href={link.url} aria-label={`Gp to section ${link.title}`}>
          {link.title}
          <span>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-menu`}></use>
            </svg>
          </span>
        </a>
      ))}
    </NavList>
  );
};

export default Menu;
