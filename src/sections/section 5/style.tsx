import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  ${({ theme }) => css`
    #titles {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 3.4rem;
      span {
        letter-spacing: 0em;
        text-align: center;
        font-family: 'Nunito';
        &:first-child {
          font-size: 2rem;
          font-style: normal;
          font-weight: 700;
          line-height: 2.7rem;
          color: ${theme.colors.blue};
        }
        &:last-child {
          font-family: 'Inter';
          font-size: 1.8rem;
          font-style: normal;
          font-weight: 600;
          line-height: 2.2rem;
          color: ${theme.colors.primary};
        }
      }
    }

    ${media.greaterThan('1136px')`
        #titles {
      margin-bottom: 3.4rem;
      margin-left: 5%;
      span {
            text-align: left;
        &:first-child {      
            font-size: ${theme.fonts.big};
            line-height: 3.1rem;         
        }
        &:last-child {
            font-size: ${theme.fonts.xxxxBig};
            line-height: 4.8rem;
            color: ${theme.colors.primary};
          
        }
      }
    }
    `}
  `}
`;

export const Reviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  #arrowLeft,
  #arrowRight {
    transition: 0.3s;
    &:hover {
      cursor: pointer;

      fill: #b4b4b43d;
    }
    display: none;
  }

  #arrowLeftRight {
    margin-top: 3rem;
  }

  ${media.greaterThan('medium')`
  flex-direction: row;
    justify-content: space-between;
  #arrowLeftRight {
    display: none;
  }
   #arrowLeft,
   #arrowRight {
    display: block;
  }
  `}
`;

export const Content = styled.div`
  display: flex;

  width: 100%;
  padding: 1rem;
  overflow-x: scroll;

  /* width */
  ::-webkit-scrollbar {
    display: none;
  }

  > * {
    margin: 0 1rem;
  }
  ${media.greaterThan('medium')`
   
   
   `}
`;
