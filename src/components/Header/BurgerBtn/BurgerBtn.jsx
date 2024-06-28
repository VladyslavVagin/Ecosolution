import React from "react";
import sprite from "../../../images/icons.svg";
import { Button } from "./BurgerBtn.styled";

const BurgerBtn = () => {
  return (
    <div>
      <Button type="button" aria-label="Open mobile menu">
        <svg width={16} height={16}>
          <use xlinkHref={`${sprite}#icon-menu`}></use>
        </svg>
      </Button>
    </div>
  );
};

export default BurgerBtn;
