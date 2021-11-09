import * as S from './style';
import Institutes from 'assets/Institutes.png';
import { Text } from 'components/text';
import { ReactComponent as MatGroup } from 'assets/MatGroup.svg';
import { ReactComponent as MatOne } from 'assets/mat1.svg';
import { ReactComponent as MatTwo } from 'assets/mat2.svg';
import { ReactComponent as MatThree } from 'assets/mat3.svg';
import { Button } from 'components/button';
import StudentPNG from 'assets/girl.png';

export const SectionTwo = () => {
  return (
    <S.Container id="quemSomos">
      <img src={Institutes} alt="Institutos" />
      <div>
        <S.Wrapper>
          <S.Presentation>
            <MatGroup />

            <S.Content>
              <S.Element>
                <MatOne />
                <Text
                  sizeMedium
                  title="100% focado na matemática"
                  text="Todo material é construído por profissionais
                      especializados e com foco no perfil de
                      cada vestibular."
                />
              </S.Element>

              <S.Element>
                <MatTwo />
                <Text
                  sizeMedium
                  text="Todo o suporte que você precisa para
                      aprender o conteúdo dos principais vestibulares!"
                  title="Acompanhamento de perto!"
                />
              </S.Element>

              <S.Element>
                <MatThree />
                <Text
                  sizeMedium
                  text="Resolução instantânea de qualquer equação
                      algébrica na plataforma, além de vídeos, 
                      apostilas, simulados e central de dúvidas 24h!"
                  title="Matemática de um jeito fácil!"
                />
              </S.Element>
            </S.Content>
          </S.Presentation>

          <Button
            size="big"
            colors="dark"
            label="Quero ser aprovado"
            ArrowRight
            text="Quero ser aprovado"
          />
        </S.Wrapper>
      </div>
      <img id="studentIMG" src={StudentPNG} alt="jovem estudante" />
    </S.Container>
  );
};
