import * as S from './style';
import { ReactComponent as Check } from 'assets/check.svg';
import { Button } from 'components/button';
import { ReactComponent as DiscountStar } from 'assets/BigStar.svg';

export type props = {
  color: 'light' | 'dark';
  PlanoName: string;
  accessTime: string;
  discount?: number;
  totalValueWithoutDiscount: number;
  payTimes: string;
};

export const Plano = ({
  color,
  payTimes,
  accessTime,
  PlanoName,
  totalValueWithoutDiscount,
  discount,
}: props) => {
  return (
    <S.Container color={color}>
      <S.AccessTime>{accessTime} de acesso.</S.AccessTime>
      <S.Plano color={color}>{PlanoName}</S.Plano>
      <span id="advantage">vantagens</span>
      <S.Advantages color={color}>
        <div>
          <Check />

          <S.Advantage color={color}>
            Acesso a todos os benefícios da Plataforma (Videoaulas, Exercícios,
            Apostilas e muito mais)
          </S.Advantage>
        </div>

        <div>
          <Check />
          <S.Advantage color={color}>
            Grupo no Whatsapp com professores e alunos
          </S.Advantage>
        </div>

        <div>
          <Check />
          <S.Advantage color={color}>Revisão para o ENEM</S.Advantage>
        </div>

        <div>
          <Check />
          <S.Advantage color={color}>
            Grupo no Whatsapp com professores e alunos
          </S.Advantage>
        </div>

        <div>
          <Check />
          <S.Advantage color={color}>
            Reforço para FUVEST, Unicamp e Vestibulares de Medicina
          </S.Advantage>
        </div>
      </S.Advantages>

      <div id="priceAndButton">
        <S.Prices color={color}>
          <span id="MoneySymbol">R$</span>
          <span id="TotalValue">de R$180,00</span>
          <span id="payTime">/ano</span>
          <span id="Message">Menos de 5 reais por mês</span>
          <S.Price color={color}>4</S.Price>
        </S.Prices>

        <Button
          text="Eu quero!"
          label="comprar um plano"
          colors={color === 'dark' ? 'lightGradient' : 'dark'}
          size="medium"
        />
      </div>

      <S.Discount>
        <div>
          <span>70%</span>
          <span>de desconto</span>
        </div>
        <DiscountStar />
      </S.Discount>
    </S.Container>
  );
};
