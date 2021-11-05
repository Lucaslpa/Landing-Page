import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40.3rem;
  width: 100%;
  max-width: 6.7rem;
  > svg {
    &:nth-child(1) {
      margin-bottom: 1rem;
    }
    &:nth-child(3) {
      margin: 1rem 0;
    }
    &:nth-child(5) {
      margin-top: 1rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    svg {
      margin: 0.3rem;
    }
  }
`;
