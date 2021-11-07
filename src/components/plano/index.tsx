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
  advantages: string[];
  message?: string;
};

export const Plano = ({
  color,
  payTimes,
  accessTime,
  PlanoName,
  totalValueWithoutDiscount,
  discount,
  advantages,
  message,
}: props) => {
  function handleCalcDiscount() {
    if (!discount) return;
    const valueDiscount = (discount / 100) * totalValueWithoutDiscount;
    const valueWithDiscount = totalValueWithoutDiscount - valueDiscount;
    return valueWithDiscount.toFixed(0);
  }

  return (
    <S.Container color={color}>
      <S.AccessTime>{accessTime} de acesso.</S.AccessTime>
      <S.Plano color={color}>{PlanoName}</S.Plano>
      <span id="advantage">vantagens</span>
      <S.Advantages color={color}>
        {advantages.map((advantage) => (
          <div>
            <Check />

            <S.Advantage color={color}>{advantage}</S.Advantage>
          </div>
        ))}
      </S.Advantages>

      <div id="priceAndButton">
        <S.Prices color={color}>
          <span id="MoneySymbol">R$</span>
          {discount ? (
            <span id="TotalValue">de R${totalValueWithoutDiscount} por</span>
          ) : null}

          {message ? <span id="Message">{message}</span> : null}
          <S.Price color={color}>
            {discount ? handleCalcDiscount() : totalValueWithoutDiscount}
            <div id="payTime">/{payTimes}</div>
          </S.Price>
        </S.Prices>

        <Button
          text="Eu quero!"
          label="comprar um plano"
          colors={color === 'dark' ? 'lightGradient' : 'dark'}
          size="medium"
        />
      </div>

      {discount ? (
        <S.Discount>
          <div>
            <span>{discount}%</span>
            <span>de desconto</span>
          </div>
          <DiscountStar />
        </S.Discount>
      ) : null}
    </S.Container>
  );
};
