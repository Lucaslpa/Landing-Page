import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}

  padding: 0 1.4rem;

  ${media.greaterThan('medium')`
    padding:  10rem !important;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 45.1rem;
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
  align-items: flex-start;
      div {
          flex-direction: row;
          align-items: center;
         span {
              margin-left: 1.4rem;
              margin-top: 0;
              font-size: 2rem;
              width: 100%;
         }
      }
       h1 {
           text-align: left;
       }
      p {
          text-align: left; 
          margin-bottom: 3.2rem;
      }
  `}
`;
