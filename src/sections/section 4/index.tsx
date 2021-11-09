import * as S from './style';
import { ReactComponent as Robot } from 'assets/robot.svg';
import { Button } from 'components/button';
import { Plano } from 'components/plano';

export const SectionFour = () => {
  const planoRecomendadoAdvantages = [
    'Acesso a todos os benefícios da Plataforma(Videoaulas, Exercícios, Apostilas e muito mais)',
    '36 aulas ao vivo',
    'Revisão para o ENEM',
    'Grupo no Whatsapp com professores e alunos',
    'Reforço para FUVEST, Unicamp e Vestibulares de Medicina',
  ];

  const planoAprovadoAdvantages = [
    'Acesso a todos as videoaulas',
    'Ganhe pontos resolvendo questões e troque por prêmios',
    '3.000 exercícios com resolucão em vídeo',
    '4 apostilas com todo o conteúdo de Matemática',
    'Reforço para FUVEST, Unicamp e Vestibulares de Medicina',
  ];

  return (
    <S.Container id="Planos">
      <S.Wrapper>
        <div id="titles">
          <span>NOSSOS PLANOS</span>
          <span>Invista no seu futuro</span>
        </div>

        <S.Content>
          <Plano
            PlanoName="Plano recomendado"
            accessTime="1 ano"
            discount={70}
            color="dark"
            advantages={planoRecomendadoAdvantages}
            message="Menos de 5 reais por mês :)"
            payTimes="ano"
            totalValueWithoutDiscount={178.8}
          />

          <Plano
            PlanoName="Plano Aprovado"
            accessTime="6 meses"
            color="light"
            advantages={planoAprovadoAdvantages}
            payTimes="sem"
            totalValueWithoutDiscount={39.9}
          />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};
