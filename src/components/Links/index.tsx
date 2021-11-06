import * as S from './style';

export type props = {
  title: string;
  links: string[];
};

export const Links = ({ links, title }: props) => {
  return (
    <S.Container>
      <span>{title}</span>

      {links.map((link) => (
        <a href="/">{link}</a>
      ))}
    </S.Container>
  );
};
