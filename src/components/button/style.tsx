import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type button = {
  size: 'small' | 'medium' | 'big' | 'xBig';
  colors: 'light' | 'dark' | 'lightGradient';
};

const colorsStyles = {
  dark: css`
    ${({ theme }) => css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      fill: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.primaryLight};
      }
    `}
  `,
  light: css`
    ${({ theme }) => css`
      color: ${theme.colors.primary};
      background-color: ${theme.colors.secondary};
      fill: ${theme.colors.primary};
      &:hover {
        background-color: ${theme.colors.secondaryDark};
      }
    `}
  `,

  lightGradient: css`
    ${({ theme }) => css`
      color: ${theme.colors.white};
      fill: ${theme.colors.white};
      background: ${theme.colors.gradient};
    `}
  `,
};

const sizeStyles = {
  small: css`
    ${({ theme }) => css`
      max-width: 13.3rem;
      max-height: 4.3rem;

      font-size: ${theme.fonts.xSmall};
      text-align: center;
    `}
  `,

  medium: css`
    ${({ theme }) => css`
      max-width: 20rem;
      max-height: 6rem;

      font-size: ${theme.fonts.small};
      text-align: center;
      ${media.lessThan('medium')`
            font-size: ${theme.fonts.xxSmall};
             max-width: 11.1rem;
           max-height: 3.3rem;
           svg {
               width: 1.7rem;
           }
      `}
    `}
  `,
  big: css`
    ${({ theme }) => css`
      max-width: 31.3rem;
      max-height: 6rem;

      font-size: ${theme.fonts.small};
      text-align: center;
      ${media.lessThan('medium')`
            font-size: ${theme.fonts.xSmall};
             max-width: 29.4rem;
            max-height: 5.7rem;
           svg {
                width: 1.7rem;
           }
      `}
    `}
  `,
  xBig: css`
    ${({ theme }) => css`
      max-width: 38rem;
      max-height: 5.9rem;

      font-size: ${theme.fonts.small};
      text-align: center;
      ${media.lessThan('medium')`
            font-size: ${theme.fonts.xSmall};
             max-width: 29.4rem;
           max-height: 4.6rem;
           svg {
               width: 1.4rem;
           }
      `}
    `}
  `,
};

export const Button = styled.a<button>`
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  cursor: pointer;
  font-family: Inter;
  font-weight: bold;
  line-height: 21px;
  font-style: normal;
  ${({ theme, size, colors }) => css`
    ${colorsStyles[colors]};
    ${sizeStyles[size]};
    border-radius: ${theme.radius};
  `}
`;
