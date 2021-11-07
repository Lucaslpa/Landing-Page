import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  padding: 1rem;
`;

export const Element = styled.div<{ side: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 3rem 0;

  ${({ side }) => css`
    ${media.greaterThan('large')`
    flex-direction: ${side === 'left' ? 'row-reverse' : 'row'};  
    justify-content: space-between;
  `}
    margin: 0;
  `}

  > img {
    width: 100%;
    margin-top: 3rem;
    max-width: 35rem;
  }
`;
