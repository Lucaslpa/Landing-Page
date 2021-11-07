import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > div {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    > img {
      width: 50%;
      max-width: 59.1rem;
      height: 100%;
      max-height: auto;
      display: none;
    }
    ${media.greaterThan('large')`
     > img {
         display: block;
     }
  `}
  }
`;

export const Wrapper = styled.div`
  > img {
    position: relative;
    left: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  margin-top: 5rem;
  padding: 0 1rem;
  padding-bottom: 4rem;

  ${media.greaterThan('medium')`
   align-items: flex-start; 
   max-width: 60rem;
   padding-bottom: 2rem;
  `}

  ${media.greaterThan('large')`
   align-items: flex-start; 
   `}
`;

export const Presentation = styled.div`
  display: flex;
  height: auto;
  margin-bottom: 6rem;

  > svg {
    width: 100%;
    max-width: 6.7rem;
    height: 40.3rem;
    display: none;
  }

  ${media.greaterThan('medium')`
  margin-bottom: 2rem;  
  >svg {
      display: block;
        }; 
 
  `}
`;

export const Content = styled.div`
  height: 46.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;

  ${media.greaterThan('medium')`
   margin-left: 2.3rem;
   height: 48.4rem;
  
  `}
`;

export const Element = styled.div`
  margin-bottom: 2.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('medium')`
    svg {
        display: none;
    }
  `}
`;
