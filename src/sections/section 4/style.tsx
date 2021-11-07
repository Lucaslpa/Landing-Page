import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 100rem;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    #titles {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 3.4rem;
      span {
        &:first-child {
          font-family: 'Nunito';
          font-size: 2rem;
          font-style: normal;
          font-weight: 700;
          line-height: 2.7rem;
          letter-spacing: 0em;
          text-align: center;
          color: ${theme.colors.blue};
        }
        &:last-child {
          font-family: 'Inter';
          font-size: 1.8rem;
          font-style: normal;
          font-weight: 600;
          line-height: 2.2rem;
          letter-spacing: 0em;
          text-align: center;
          color: ${theme.colors.primary};
        }
      }
    }

    ${media.greaterThan('1136px')`
        #titles {
      margin-bottom: 3.4rem;
      span {
        &:first-child {
        
         font-size: 2.2rem;
         font-style: normal;
         
         line-height: 3rem;
      
         text-align: left;

        }
        &:last-child {
         font-family: Nunito;
         font-size: 2.2rem;
         font-weight: 700;
         line-height: 3rem;
         text-align: left;
          color: ${theme.colors.primary};
        }
      }
    }
    `}
  `}
`;

export const Content = styled.div`
  > div {
    margin: 2.3rem 0;
  }

  ${media.greaterThan('1136px')`
   display: flex; 
   width: 100%; 
   justify-content: space-between;
   > div {
    margin: 0;

    &:first-child {
      margin-right: 1.5rem; 
    }

    &:last-child: {
      margin-left: 1.5rem;
    }
  }
 
  `}
`;
