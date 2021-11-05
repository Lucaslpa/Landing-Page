import * as S from './style';
import { ReactComponent as Mat1 } from 'assets/mat1.svg';
import { ReactComponent as Mat2 } from 'assets/mat2.svg';
import { ReactComponent as Mat3 } from 'assets/mat3.svg';
import { ReactComponent as Dot } from 'assets/dot.svg';

export const Verticals = () => {
  return (
    <S.Container>
      <Mat1 />
      <div>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>

      <Mat2 />
      <div>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
      <Mat3 />
    </S.Container>
  );
};
