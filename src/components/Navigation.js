import React from "react";
import styled from "styled-components";

const Navigation = ({ isHeader, isMobileNavActive }) => {
  return (
    <NavigationContainer
      isHeader={isHeader}
      isMobileNavActive={isMobileNavActive}
    >
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/career">Careers</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/support">Support</a>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  transition: width 0.2s ease-in-out;

  @media only screen and (max-width: 675px) {
    ${({ isHeader }) =>
      isHeader &&
      `
      width: 0;
      opacity: 0; `}

      ${({ isHeader, isMobileNavActive }) =>
        isHeader &&
        isMobileNavActive &&
        `
        position: fixed;
        top: 0;
        left: 0;
        opacity: 1;
        width: 100%;
        height: 100vh;
        background: var(--black);
        z-index: 5;
        
        `}
      
     }
  }

  ul {
    position: relative;
    list-style-type: none;
    z-index: 8;

    @media only screen and (max-width: 675px) {
      ${({ isHeader }) =>
        isHeader &&
        ` 
          position: relative;
          top: 33vh;
          left: 7vw;
        `}
    }

    li {
      display: inline-block;
      margin-right: 25px;

      @media only screen and (max-width: 675px) {
        ${({ isHeader }) =>
          isHeader &&
          `
          display: block;
          margin-right: 0;
          margin-bottom: 20px;
        `}
      }

      @media only screen and (max-width: 520px) {
        ${({ isHeader }) =>
          !isHeader &&
          `
          display: block;
          margin-right: 0;
          margin-bottom: 20px;
          text-align: center;
        `}
      }

      a {
        text-decoration: none;
        font-size: 15px;
        color: var(--white);
        padding-bottom: 4px;
        transition: all 0.3s ease;

        @media only screen and (max-width: 675px) {
          ${({ isHeader }) =>
            isHeader &&
            ` 
              font-size: 1.3rem;
              font-weight: 300;
              text-transform: uppercase;
              color: var(--white);

              :hover {
                font-size: 1.4rem;
              }
            `}
        }

        :hover {
          border-bottom: 1px solid var(--white);
        }
      }
    }
  }
`;
