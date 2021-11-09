import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ReactComponent as background } from 'assets/Rectangle 8.svg';

export const Background = styled(background)`
  position: absolute;
  left: 1%;
  width: 80%;
  top: -10%;
  max-width: 68rem;
  ${media.lessThan('medium')`
  
   display: none;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}

  padding: 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 117rem;
  z-index: 20;
  justify-content: center;
  ${media.greaterThan('medium')`
    justify-content: flex-start;
    padding: 0;
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 48.1rem;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: bold;
        font-size: ${theme.fonts.small};
        color: ${theme.colors.secondary};
        line-height: 26px;
        margin-top: 2.3rem;
        text-align: center;
      }
    }

    h1 {
      font-family: 'Fredoka One', cursive;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      letter-spacing: -0.01em;
      font-weight: 400;
      color: ${theme.colors.white};
      margin-top: 3rem;
      span {
        color: ${theme.colors.secondary};
      }
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-align: center;
      letter-spacing: 0.38px;
      color: ${theme.colors.white};
      margin-top: 2.3rem;
      margin-bottom: 9.5rem;
    }
  `}
  ${media.greaterThan('medium')`
   max-width: 50.1rem;
  align-items: flex-start;
      div {
          flex-direction: row;
          align-items: center;
         span {
              
              margin-top: 0;
              font-size: 2rem;
              width: 100%;
             
         }
      }
       h1 {
           text-align: left;
       }
      p {  font-weight: normal;
          text-align: left; 
          margin-bottom: 3.2rem;
          font-size: 1.9rem;
          letter-spacing: 0.38px;
          line-height: 29px;
      }
  `};
`;
