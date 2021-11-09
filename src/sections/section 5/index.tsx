import * as S from './style';
import { ReactComponent as ArrowRight } from 'assets/Right.svg';
import { ReactComponent as ArrowLeft } from 'assets/Left.svg';
import { ReactComponent as LeftRight } from 'assets/LeftRight.svg';
import Lucas from 'assets/lucas.png';
import Amanda from 'assets/amanda.png';
import Rodrigo from 'assets/Rodrigo.png';
import { Review } from 'components/review';

export const SectionFive = () => {
  const reviews = [
    {
      img: Lucas,
      text: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
      reviewerDescription: 'CEO / Creative IT',
      reviewerName: 'Lucas Correia',
    },
    {
      img: Amanda,
      text: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
      reviewerDescription: 'Analista junior',
      reviewerName: 'Amanda Merien',
    },
    {
      img: Rodrigo,
      text: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.',
      reviewerDescription: 'Presidente / Amazon',
      reviewerName: 'Rodrigo Godoy',
    },
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <div id="titles">
          <span>DEPOIMENTOS</span>
          <span>Recomendados por quem é expert no assunto</span>
        </div>

        <S.Reviews>
          <ArrowLeft id="arrowLeft" />
          <S.Content>
            {reviews.map((review) => (
              <Review
                img={review.img}
                reviewText={review.text}
                reviewerDescription={review.reviewerDescription}
                reviewerName={review.reviewerName}
                key={review.reviewerDescription}
              />
            ))}
          </S.Content>
          <ArrowRight id="arrowRight" />

          <LeftRight id="arrowLeftRight" />
        </S.Reviews>
      </S.Wrapper>
    </S.Container>
  );
};
