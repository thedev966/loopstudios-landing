import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Links>
          <Logo src={logo} />
          <Navigation />
        </Links>
        <Social>
          <Icons>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <PinterestIcon />
          </Icons>
          <Copyright>
            &#169; {new Date().getFullYear()} Loopstudios. All rights reserved.
          </Copyright>
        </Social>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--black);
`;

const FooterWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 45px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 910px) {
    flex-direction: column;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 910px) {
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 150px;
  object-fit: contain;
  padding-bottom: 30px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 910px) {
    margin-top: 40px;
  }
`;

const Icons = styled.div`
  padding-bottom: 30px;
  text-align: right;

  @media only screen and (max-width: 910px) {
    text-align: center;
    padding-bottom: 12px;
  }

  .MuiSvgIcon-root {
    width: 28px;
    height: 28px;
    color: var(--white);
    margin-left: 10px;
    cursor: pointer;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    :hover {
      border-bottom: 1px solid var(--white);
    }
  }
`;

const Copyright = styled.p`
  color: var(--white);

  @media only screen and (max-width: 380px) {
    font-size: 14px;
  }
`;
