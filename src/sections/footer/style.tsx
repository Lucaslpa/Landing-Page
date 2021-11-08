import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ReactComponent as GoToTop } from 'assets/Up.svg';

export const GoTop = styled(GoToTop)`
  cursor: pointer;

  margin-top: 3rem;
  ${media.greaterThan('medium')`
    position: stick;
    bottom: 5%; 
    right: 1%;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  height: auto;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  ${media.greaterThan('medium')`
      #PlatformsColumn {
        display: none;
      }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('1000px')`
     width: 100%; 
     max-width: 100rem;

  `}
`;

export const SocialMediaAndCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  ${media.greaterThan('1000px')`
       padding: 2rem 0;
       display: flex;
       width: 100%;
        margin-top: 0rem;
       justify-content: space-between;
       flex-direction: row-reverse;
     
  `};
`;

export const Content = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.greaterThan('1000px')`
       flex-direction: row;
       padding: 0;
       width: 100%;
       justify-content: space-between;
       border-bottom: solid 1px rgba(84, 84, 212, 0.34);;
       padding-bottom:3rem ;
  `}
`;

export const LogoAndPlatforms = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 37rem;
  margin-bottom: 5rem;
  align-items: center;
  height: auto;
  #PlatformsRow {
    margin-top: 5rem;
    display: none;
  }

  ${media.greaterThan('medium')`
  margin-bottom: 0;
  align-items: flex-start;
      #PlatformsRow {
        display: block
      }
  `}
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 74rem;
  height: 100%;

  > nav {
    margin-top: 2rem;
  }

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: flex-start; margin-left: 9rem;
    margin-top: 4rem;
   > nav {
    margin-top: 0;
  }
   
  `}
`;

export const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;

  > span {
    font-family: Work Sans;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 0.8rem;
    color: #7b7b7b;
  }

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
  
    > span {
     margin-left: 1rem;
     margin-top: 0;
    }
  `}

  ${media.greaterThan('1000px')`
  margin-top: 0;
  `}
`;
