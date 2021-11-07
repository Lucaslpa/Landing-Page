import * as S from './style';

import { Text } from 'components/text';
import BoyHappy from 'assets/BoyHappy.png';
import BoyRocket from 'assets/BoyRocket.png';

export const SectionThree = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Element side="left">
          <Text
            topText="100% MATEMÁTICA"
            title="Matemática para quem quer entrar na facul."
            text="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
          />
          <img src={BoyRocket} alt="garoto em um foguete" />
        </S.Element>

        <S.Element side="right">
          <Text
            topText="QUER SER APROVADO?"
            title="Se seu foco é ser aprovado, nós estamos aqui por você."
            text="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis."
          />
          <img src={BoyHappy} alt="garoto feliz com uma medalha" />
        </S.Element>
      </S.Wrapper>
    </S.Container>
  );
};
