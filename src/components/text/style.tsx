import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div<{ sizeMedium: boolean }>`
  width: 100%;
  max-width: 27.3rem;
  height: auto;

  ${({ sizeMedium }) => css`
    ${sizeMedium
      ? media.greaterThan('small')`
           max-width: 48.9rem;
           height: auto;

      `
      : media.greaterThan('small')`

     max-width: 60rem;
     
    
    `}
  `}
`;

export const TopText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.fonts.medium};
    font-weight: 700;
    font-family: 'Inter';
    text-align: center;
    line-height: 2.7rem;
    display: flex;
    justify-content: center;

    ${media.greaterThan('small')`
       font-size: ${theme.fonts.big};
       justify-content: flex-start;
       line-height: 3rem;
    `}
  `}
`;
export const Title = styled.h2<{ sizeMedium: boolean }>`
  ${({ theme, sizeMedium }) => css`
    margin-top: 0.8rem;
    color: ${theme.colors.primary};
    font-size: calc(${theme.fonts.small} + 1px);
    font-weight: 600;
    font-family: 'Inter';
    text-align: center;
    line-height: 3rem;

    ${sizeMedium
      ? media.greaterThan('small')`
        font-size: ${theme.fonts.xBig};
        line-height: 3rem;
        
      `
      : media.greaterThan('small')`
        font-size: ${theme.fonts.xxxxBig};
        line-height: 6.1rem;
        
    `}

    ${sizeMedium
      ? media.greaterThan('medium')`
       
        text-align: left;
      `
      : media.greaterThan('small')`
        
        text-align: left;
    `}
  `}
`;
export const Paragraph = styled.p<{ sizeMedium: boolean }>`
  ${({ theme, sizeMedium }) => css`
    margin-top: 0.8rem;
    color: ${theme.colors.grayDark};
    font-size: ${theme.fonts.xxSmall};
    font-weight: 400;
    font-family: 'Inter';
    text-align: center;
    line-height: 1.4rem;
    ${sizeMedium
      ? media.greaterThan('small')`
           font-size: calc(${theme.fonts.medium} - 1px);
           line-height: 3rem;
          
      `
      : media.greaterThan('small')`
       font-size: ${theme.fonts.medium};
       line-height: 3.7rem;            
       

    `}

    ${sizeMedium
      ? media.greaterThan('medium')`
           
            text-align: left;
      `
      : media.greaterThan('medium')`
               
       text-align: left;

    `}
  `}
`;
