import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ReactComponent as BoyWithTablet } from 'assets/BoyWithTablet/Frame 24.svg';
import { ReactComponent as numbers } from 'assets/BoyWithTablet/image.svg';

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  ${({ theme }) => css`
    background-color: transparent;
  `}
  position: absolute;
  right: 0;
  top: 10%;
  right: 0%;

  img,
  svg {
    width: 100%;
    max-width: 56rem;
    z-index: 10;
  }
  display: none;

  ${media.greaterThan('large')`
   display: block;
  `}
`;

export const Boy = styled(BoyWithTablet)``;

export const Numbers = styled(numbers)`
  position: absolute;
  right: 2%;
  bottom: -55%;
  z-index: 2;
`;
