// @ts-nocheck
import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import { HeaderMain, HeaderContainer } from "./Header.styled";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <HeaderMain data-scrolled={scrolled}>
        <HeaderContainer>
          <Logo />
          <BurgerBtn fn={setOpenMenu} />
        </HeaderContainer>
      </HeaderMain>
      {openMenu && (<MobileMenu fn={setOpenMenu} />)}
    </>
  );
};

export default Header;
