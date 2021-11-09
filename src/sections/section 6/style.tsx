import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Wrapper = styled.div`
  padding: 4rem 2rem 0 2rem;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    margin-top: 8.6rem;
    position: relative;
    bottom: 0;
    left: 0;
    max-width: 38.9rem;
  }

  ${media.greaterThan('1000px')`
   align-items: flex-end;
   height: 100%;
   justify-content: center;
    height: 60.5rem;
    display: flex; 
    align-items: center;
    flex-direction: row-reverse;
    padding: 0;
    justify-content: space-evenly;
    img {
      max-width: 45.9rem;
      top: -10%;
    }
    
  `}
`;

export const Content = styled.div`
  display: flex;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 54.5rem;
  align-self: center;

  ${({ theme }) => css`
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      > span {
        font-family: 'Inter';
        font-size: ${theme.fonts.small};
        font-style: normal;
        font-weight: 700;
        line-height: 2.6rem;
        letter-spacing: 0em;
        text-align: center;
        color: ${theme.colors.secondary};
        margin-top: 2.6rem;
      }
    }

    p {
      font-family: 'Inter';
      font-size: calc(${theme.fonts.xxSmall} - 1px);
      font-style: normal;
      font-weight: 400;

      letter-spacing: 0.3799999952316284px;
      text-align: center;
      color: ${theme.colors.white};
      margin-top: 0.9rem;
      margin-bottom: 4.8rem;

      line-height: 20px;
    }
    ${media.greaterThan('900px')`
     align-items: flex-start;
   > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      > span {  
        font-size: ${theme.fonts.medium};
        font-weight: bold;
        line-height: 2.6rem;
        text-align: left;
        margin-left: 2.3rem;
         margin-top: 0;
      }
    }
    p {
      font-weight: 400;
      line-height: 2.9rem;
      letter-spacing: 0.38px;
      text-align: left;
      margin: 3rem 0;
    }
   
  `}
  `}
`;
