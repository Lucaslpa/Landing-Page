import * as S from './style';
import { ReactComponent as Robot } from 'assets/robot.svg';
import { Button } from 'components/button';
import { BoyWithTablet } from 'components/boyWithTablet';

export const SectionOne = () => {
  return (
    <S.Container id="Home">
      <S.Wrapper>
        <S.Content>
          <div>
            <Robot />
            <span>Seja aprovado no Enem e em Vestibulares :)</span>
          </div>

          <h1>
            Você escolhe o que aprender <span id="dot">.</span>
          </h1>

          <p>
            Aqui você terá toda assistência que precisa com materiais
            desenvolvido por <em>mestres e doutores em matemática</em>
          </p>

          <Button
            text="Veja nossos planos"
            ArrowRight
            label="Veja nossos planos"
            colors="light"
            size="xBig"
          />
        </S.Content>
      </S.Wrapper>
      <S.Background />
      <BoyWithTablet />
    </S.Container>
  );
};
