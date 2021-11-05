import * as S from './style';
import Logo from 'assets/logo.svg';
import LogoWithoutText from 'assets/LogoWithoutText.svg';
import { ReactComponent as Bars } from 'assets/bars.svg';
import { Button } from 'components/button';
import { useState } from 'react';

export const Menu = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <S.Menu>
      <S.LogoWithText src={Logo} alt="Logo" />
      <S.LogoWithoutText src={LogoWithoutText} />

      <Bars
        aria-label="Open And Close Menu"
        onClick={() => setOpenMenu(!OpenMenu)}
      />
      <S.MenuNav hidden={OpenMenu}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Quem Somos</a>
          </li>
          <li>
            <a href="/">Planos</a>
          </li>
          <li>
            <a href="/">Fale conosco</a>
          </li>
        </ul>
        <Button colors="dark" label="Entrar" size="small" text="Entrar" />
      </S.MenuNav>
    </S.Menu>
  );
};
