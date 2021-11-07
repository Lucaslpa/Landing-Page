import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  max-width: 37rem;
  padding: 2.4rem 2.5rem;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

export const Stars = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 1.2rem;
  svg {
    width: 1.9rem;
    height: 1.9rem;
    margin: 0 0.5rem;
  }
`;

export const ReviewText = styled.p`
  width: 100%;
  max-width: 32rem;
  height: auto;
  word-wrap: break-word;
  line-height: 2.2rem;
  font-size: 1.3rem;
  color: #7b7b7b;

  ${media.greaterThan('medium')`
   font-size: 1.6rem;
   line-height: 2.4rem;
  `}
`;

export const Reviewer = styled.article`
  display: flex;
  align-items: center;
  margin-top: 2.2rem;
  justify-content: space-between;

  ${({ theme }) => css`
    img {
      &:first-child {
        border-radius: 100%;
        width: 5.5rem;
        height: 5.5rem;
      }

      &:last-child {
        width: 4.1rem !important;
        height: 3.1rem !important;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 6%;

      span {
        text-align: left;
        &:first-child {
          color: ${theme.colors.primary};
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: calc(${theme.fonts.small} + 1px);
          line-height: 2.8rem;
        }
        &::last-child {
          color: ${theme.colors.grayDark};
          font-family: 'Inter';
          font-style: normal;
          font-weight: normal;
          font-size: calc(${theme.fonts.xSmall} + 2px);
          line-height: 1.8rem;
        }
      }
    }

    ${media.greaterThan('medium')`
             img {
      &:first-child {
        width: 6rem;
        height: 6rem;
      }

      &:last-child {
        width: 4.4rem !important;
        height: 3.4rem !important;
      }
    }

     span {
        text-align: left;
        &:first-child {
          font-size: calc(${theme.fonts.small} + 5px);
          line-height: 2.8rem;
        }
        &::last-child {
          font-size: calc(${theme.fonts.xSmall} + 5px);
          line-height: 1.8rem;
        }
      }
    `}
  `}
`;
