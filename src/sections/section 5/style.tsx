import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
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
