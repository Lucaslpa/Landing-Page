import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 117rem;
  height: auto;
  padding: 1rem 0;
`;

export const Element = styled.div<{ side: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  ${({ side }) => css`
    ${media.greaterThan('large')`
    flex-direction: ${side === 'left' ? 'row-reverse' : 'row'};  
    justify-content: space-around;
  `}
    margin: 0;
  `}
  > div {
    margin: 5rem 0;
  }
  > img {
    width: 100%;

    max-width: 45rem;
  }
`;
