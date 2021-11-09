import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  width: 100%;
  #studentIMG {
    width: 100%;
    max-width: 59.1rem;

    position: absolute;
    right: 0;
    bottom: 0;
    display: none;
  }

  > div {
    width: 100%;
    max-width: 117rem;
    height: auto;
    display: flex;
  }

  ${media.greaterThan('large')`
     #studentIMG {
         display: block;
     }
  `}
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
  max-width: 117rem;
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
  width: 100%;
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
  width: auto;

  ${media.greaterThan('medium')`
    svg {
        display: none;
    }
  `}
`;
