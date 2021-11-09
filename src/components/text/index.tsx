import * as S from './style';

export type props = {
  title: string;
  text: string;
  topText?: string;
  sizeMedium?: boolean;
};

export const Text = ({ title, text, topText, sizeMedium = false }: props) => {
  return (
    <S.Container data-testid="container" sizeMedium={sizeMedium}>
      {topText ? <S.TopText>{topText}</S.TopText> : null}
      <S.Title sizeMedium={sizeMedium}>{title}</S.Title>
      <S.Paragraph data-testid="paragraph" sizeMedium={sizeMedium}>
        {text}
      </S.Paragraph>
    </S.Container>
  );
};
