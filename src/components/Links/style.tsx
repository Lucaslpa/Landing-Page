import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.nav`
  width: 100%;
  max-width: 23.3rem;
  height: auto;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    span {
      margin-bottom: 1.3rem;
      color: ${theme.colors.primary};
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: ${theme.fonts.medium};
      line-height: 3.1rem;
      text-align: center;
      word-wrap: break-word;
      ${media.greaterThan('medium')`
       text-align: left; 
      `}
    }

    a {
      color: ${theme.colors.grayDark};
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: ${theme.fonts.small};
      line-height: 3rem;
      text-align: center;
      word-wrap: break-word;
      ${media.greaterThan('medium')`
       text-align: left; 
      `}
    }
  `}
`;
