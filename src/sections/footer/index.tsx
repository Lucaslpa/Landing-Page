import * as S from './style';
import { ReactComponent as Logo } from 'assets/logo.svg';
import PlatformsRow from 'assets/platforms.png';
import { ReactComponent as SocialMedia } from 'assets/socialMedia.svg';
import { ReactComponent as Copyright } from 'assets/Copyright.svg';
import { ReactComponent as GoToTop } from 'assets/Up.svg';
import { Links } from 'components/Links';
import PlatformsColumn from 'assets/PlatformsColumn.png';

export const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.LogoAndPlatforms>
            <Logo id="Logo" />
            <img
              src={PlatformsRow}
              id="PlatformsRow"
              alt="available platforms"
            />
          </S.LogoAndPlatforms>

          <S.LinksList>
            <Links
              title="Fale conosco "
              links={['(22) 4442-0126', 'info@digihouse.com']}
            />
            <Links
              title="Localização"
              links={['Av. Brg. Faria Lima , 1422 São Paulo - SP ']}
            />
            <Links
              title="Políticas"
              links={[
                'Direitos autorais',
                'Termos de uso',
                'Políticas de Privacidade',
              ]}
            />
          </S.LinksList>
        </S.Content>

        <img
          src={PlatformsColumn}
          id="PlatformsColumn"
          alt="available platforms"
        />

        <S.SocialMediaAndCopyright>
          <SocialMedia />

          <S.CopyRight>
            <Copyright />
            <span> Copyright 2021. All Right Reserved </span>
          </S.CopyRight>
        </S.SocialMediaAndCopyright>

        <S.GoTop id="goToTop" />
      </S.Wrapper>
    </S.Container>
  );
};
