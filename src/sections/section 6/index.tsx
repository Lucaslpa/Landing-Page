import * as S from './style';
import { ReactComponent as Robot } from 'assets/robot.svg';
import Phone from 'assets/phone.png';
import { Button } from 'components/button';

export const SectionSix = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Infos>
          <div>
            <Robot />
            <span>Seja aprovado no Enem e em Vestibulares :)</span>
          </div>

          <p>
            Receba lembretes no seu celular e tenha a facilidade de estudar a
            qualquer hora e de qualquer lugar.{' '}
            <em>Baixe nosso app e confira.</em>
          </p>

          <Button
            size="xBig"
            colors="light"
            ArrowRight
            text="Conheça nosso aplicativo"
            label="Conheça nosso aplicativo"
          />
        </S.Infos>
        <img src={Phone} alt="phone" />
      </S.Wrapper>
    </S.Container>
  );
};
