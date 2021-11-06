import * as S from './style';
import Quote from 'assets/Quote.svg';
import { ReactComponent as FilledStart } from 'assets/FilledStar.svg';
import { ReactComponent as MediumStar } from 'assets/MediumStar.svg';

export type props = {
  reviewerName: string;
  reviewerDescription: string;
  reviewText: string;
  img: string;
};

export const Review = ({
  reviewText,
  reviewerDescription,
  reviewerName,
  img,
}: props) => {
  return (
    <S.Container>
      <S.Stars>
        <FilledStart />
        <FilledStart />
        <FilledStart />
        <FilledStart />
        <MediumStar />
      </S.Stars>
      <S.ReviewText>{reviewText}</S.ReviewText>
      <S.Reviewer>
        <img src={img} alt="reviewer" />
        <div>
          <span>{reviewerName}</span>
          <span>{reviewerDescription}</span>
        </div>
        <img src={Quote} alt="Quote" />
      </S.Reviewer>
    </S.Container>
  );
};
