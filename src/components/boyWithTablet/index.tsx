import * as S from './style';
import Boy from 'assets/BoyWithTablet/BOY.png';

export const BoyWithTablet = () => {
  return (
    <S.Wrapper>
      <img src={Boy} alt="" />
      <S.Numbers />
    </S.Wrapper>
  );
};
