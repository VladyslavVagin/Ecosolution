import React from "react";
import Logo from "./Logo/Logo";
import { HeaderMain, HeaderContainer } from "./Header.styled";
import BurgerBtn from "./BurgerBtn/BurgerBtn";

const Header = () => {
  return (
    <HeaderMain>
      <HeaderContainer>
        <Logo />
        <BurgerBtn />
      </HeaderContainer>
    </HeaderMain>
  );
};

export default Header;
