import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Navigation from "./Navigation";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleMobileNav = () => {
    if (!isMobileNavActive) {
      // make mobile nav active
      setIsMobileNavActive(true);
      // hide scrollbar
      document.body.style.overflow = "hidden";
    }
  };

  const closeMobileNav = () => {
    // make mobile nav inactive
    setIsMobileNavActive(false);
    // show scrollbar back
    document.body.style.overflow = "visible";
  };

  return (
    <HeaderContainer>
      <Logo src={logo} />
      <Navigation isHeader isMobileNavActive={isMobileNavActive} />
      <HamburgerIconContainer isVisible={isMobileNavActive}>
        <MenuIcon onClick={handleMobileNav} />
      </HamburgerIconContainer>
      <CloseIconContainer isVisible={isMobileNavActive}>
        <CloseIcon onClick={closeMobileNav} />
      </CloseIconContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  .MuiSvgIcon-root {
    width: 0;
    opacity: 0;
    color: var(--white);
    cursor: pointer;
    transition: width 0.3s ease;

    :hover {
      opacity: 0.8;
    }

    @media only screen and (max-width: 675px) {
      width: 33px;
      height: 33px;
      opacity: 1;
    }
  }
`;

const HamburgerIconContainer = styled.div`
  position: absolute;
  right: 0;
  width: 33px;
  height: 33px;
  z-index: 8;
  display: ${({ isVisible }) => (isVisible ? "none" : "block")};
`;

const CloseIconContainer = styled(HamburgerIconContainer)`
  display: ${({ isVisible }) => (!isVisible ? "none" : "block")};
`;

const Logo = styled.img`
  width: 20%;
  max-width: 150px;
  cursor: pointer;
  z-index: 8;

  @media only screen and (max-width: 675px) {
    width: 160px;
  }

  @media only screen and (max-width: 530px) {
    width: 170px;
  }
`;
