import * as S from './style';
import Logo from 'assets/logo.svg';
import LogoWithoutText from 'assets/LogoWithoutText.svg';
import { ReactComponent as Bars } from 'assets/bars.svg';
import { Button } from 'components/button';
import { useState } from 'react';
import { MouseEvent } from 'react';

export const Menu = ({
  fixed = false,
  hidden = false,
}: {
  hidden?: boolean;
  fixed?: boolean;
}) => {
  const [OpenMenu, setOpenMenu] = useState(false);

  function closeMenu() {
    setOpenMenu(false);
  }

  function handleScrollToPlanos() {
    const planos = document.querySelector('#Planos');
    planos?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }

  function handleScrollToQuemSomos() {
    const QuemSomos = document.querySelector('#quemSomos');
    QuemSomos?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }

  function handleScrollToFaleConosco() {
    const FaleConosco = document.querySelector('#faleConosco');
    FaleConosco?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }

  function handleScrollToHome() {
    const Home = document.querySelector('#Home');
    Home?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }

  return (
    <S.Menu fixed={fixed} hidden={hidden}>
      <S.LogoWithText src={Logo} alt="Logo" />
      <S.LogoWithoutText src={LogoWithoutText} />

      <Bars
        aria-label="Open And Close Menu"
        onClick={() => setOpenMenu(!OpenMenu)}
      />
      <S.MenuNav hidden={OpenMenu}>
        <ul>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToHome();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToQuemSomos();
              }}
            >
              Quem Somos
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleScrollToPlanos();
              }}
              href="/"
            >
              Planos
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleScrollToFaleConosco();
              }}
              href="/"
            >
              Fale conosco
            </a>
          </li>
        </ul>
        <Button colors="dark" label="Entrar" size="small" text="Entrar" />
      </S.MenuNav>
    </S.Menu>
  );
};
