import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div<{ color: 'dark' | 'light' }>`
  ${({ theme, color }) => css`
    background-color: ${color === 'dark'
      ? theme.colors.primary
      : theme.colors.white};

    border: ${color === 'dark'
      ? 'solid 0.5px #201e540'
      : 'solid 0.5px rgba(32, 30, 84, 0.18)'};
    #advantage {
      color: ${theme.colors.blue};
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      line-height: 1.5rem;
      font-size: ${theme.fonts.xxSmall};
    }
  `}
  border-radius: 1rem;
  height: 38.7rem;
  width: 100%;
  max-width: 31.9rem;
  padding: 3rem;

  #priceAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  position: relative;

  ${media.greaterThan('medium')`
    max-width: 47rem;
    height: 59.2rem;
    
    #advantage {
    font-family: 'Nunito';
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 3.1rem;
    text-transform: lowercase;
    }

    #priceAndButton {
       margin-top: 2.3rem;
        
    }
  `}
`;

export const AccessTime = styled.span`
  font-family: 'Nunito', sans-serif;
  color: #3c5882;

  ${({ theme }) => css`
    font-size: ${theme.fonts.xSmall};
    line-height: 1.7rem;
  `}

  ${media.greaterThan('medium')`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 3.1rem;
  `}
`;

export const Plano = styled.h3<{ color: 'dark' | 'light' }>`
  font-family: 'Nunito', sans-serif;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
  font-weight: bold;
  ${({ theme, color }) => css`
    color: ${color === 'dark' ? theme.colors.white : theme.colors.primary};
    font-size: ${theme.fonts.small};
    line-height: 2.1rem;
    font-weight: 400;
    ${media.greaterThan('medium')`
    font-family: 'Nunito';
    font-size: 3rem;
    line-height: 4.8rem;
  `}
  `}
`;

export const Promotion = styled.h4`
  font-family: 'Nunito Sans', sans-serif;
`;

export const Prices = styled.div<{ color: 'dark' | 'light' }>`
  position: relative;
  width: 50%;
  height: 100%;
  padding-left: 15%;
  span {
    position: absolute;
    font-size: 1rem;
  }
  ${({ theme, color }) => css`
    span {
      color: ${color === 'dark' ? '#ffffff73' : theme.colors.primary};
    }
    #MoneySymbol {
      color: ${theme.colors.secondary};
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 1.1rem;
      left: 17%;
      top: 20%;
    }
    #TotalValue {
      bottom: 90%;
      left: 20%;
    }
    #payTime {
      color: ${color === 'dark' ? '#ffffff73' : theme.colors.primary};
    }
    #Message {
      top: 100%;
      left: 20%;
    }
  `}

  ${media.greaterThan('medium')`
     span {
        font-size: 1.5rem;
     }

     #MoneySymbol {
       font-family: Nunito Sans;
       font-style: normal;
       font-weight: 600;
       font-size: 20px;
        left: 14%;
     }
   
   `}
`;

export const Price = styled.h5<{ color: 'dark' | 'light' }>`
  font-family: 'Nunito Sans', sans-serif;
  line-height: 2.7rem;
  font-weight: 800;
  display: flex;
  #payTime {
    margin-left: 0.5rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    transform: translateY(-7%);
  }
  ${({ theme, color }) => css`
    color: ${color === 'dark' ? theme.colors.white : theme.colors.primary};
    font-size: ${theme.fonts.medium};
  `}

  ${media.greaterThan('medium')`
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 37px;
      line-height: 65px;
      #payTime {
        font-size: 1.5rem;
         transform: translateY(7%);
      }
  `}
`;

export const Advantages = styled.div<{ color: 'dark' | 'light' }>`
  padding: 2.3rem 0.2rem;
  width: 100%;
  height: auto;
  max-width: 23.3rem;

  ${({ theme, color }) => css`
    div {
      display: flex;
      align-items: center;

      svg {
        width: 2rem !important;
        margin-right: 1.1rem;
        height: 1rem;
      }
      path {
        fill: ${color === 'dark' ? theme.colors.white : theme.colors.primary};
      }
    }

    ${media.greaterThan('medium')`
      max-width: 41.5rem;
     
  `}
  `}
`;
export const Advantage = styled.p<{ color: 'dark' | 'light' }>`
  font-family: 'Nunito';
  font-size: 9px;
  line-height: 18px;
  font-weight: 400;
  margin: 0.3rem 0;
  width: 90%;
  ${({ theme, color }) => css`
    font-family: 'Nunito', sans-serif;
    color: ${color === 'dark' ? theme.colors.white : theme.colors.primary};
    ${media.greaterThan('medium')`
       font-style: normal;
       font-weight: normal;
       font-size: 1.6rem;
       line-height: 3.1rem;
  `}
  `}
`;

export const Discount = styled.div`
  position: absolute;
  top: 1.7rem;
  right: 0.8rem;
  svg {
    width: 9rem;
    height: 9rem;
  }

  > div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 30%;
    right: 24%;
    transform: rotate(20deg);
    span {
      &:first-child {
        ${({ theme }) => css`
          font-family: 'Nunito Sans';
          font-weight: 800;
          font-size: ${theme.fonts.medium};
          color: ${theme.colors.primary};
        `}
      }
      &:last-child {
        ${({ theme }) => css`
          font-size: 0.9rem;
          color: ${theme.colors.primary};
        `}
      }
    }
  }

  ${media.greaterThan('medium')`
     svg {
    width: 16rem;
    height: 16rem;
  }

  >div {
       span {
         &:first-child {
           font-family: 'Nunito Sans';
           font-style: normal;
           font-weight: 800;
           font-size: 37px;
          
         }
          &:last-child {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
       
      }
       }
    }
  `}
`;
