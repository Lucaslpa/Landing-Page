import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Menu = styled.menu`
  width: 100%;
  height: 7rem;

  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  svg {
    width: 2.1rem;

    ${media.greaterThan('medium')`
   display: none; 
   
 `}

    &:active {
      transform: scale(1.2);
    }
  }
`;

export const LogoWithText = styled.img`
  width: 20.3rem;

  ${media.lessThan('large')`
   display: none;
 `}
`;

export const LogoWithoutText = styled.img`
  width: 5rem;

  ${media.greaterThan('large')`
     display: none;
 `}
`;

export const MenuNav = styled.nav<{ hidden: boolean }>`
  display: flex;
  ${({ theme, hidden }) => css`
 
    justify-content: space-around;
    width: 100%;
    max-width: 70rem;
    background-color: ${theme.colors.white};
    opacity: 1;
    transition: 0.2s; 
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 42.7rem;
      width: 100%;

      li {
        list-style: none;
        cursor: pointer;
        a {
          font-size: ${theme.fonts.small};
          font-family: Inter;
          font-weight: 400;
          color: ${theme.colors.grayDark};
             &::after {
                content: 'sad'
                width: 100px; 
                height: 0.4rem;
                background-color: black;
           }
        }
          
        &:first-child {
          a {
            color: ${theme.colors.primary} !important;
            font-weight: 700;
          }
        }
      }
    }

    ${media.lessThan('medium')`
    position: absolute; 
    ${
      hidden
        ? css`
            opacity: 1;
            pointer-events: all;
          `
        : css`
            opacity: 0;
            pointer-events: none;
          `
    }
    top: 100%; 
    left: 0%;
    right: 0;
    height: 85vh;
     flex-direction: column; 
     justify-content: center;
     align-items: center;
   ul { 
     flex-direction: column; 
     max-width:100%;
      margin-bottom: 4rem;
      height: auto;
     li {
        margin: 1.4rem 0;
       a {
        font-size: ${theme.fonts.xBig};
      }
     }
   } 
 `}
  `}
`;
