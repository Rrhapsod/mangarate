import { TitleStyled, SubtitleStyled } from "./Title.style";

interface TituloProps {
  titulo: string;
  subtitulo?: string | JSX.Element;
}

export default function Title(props: TituloProps) {
  return (
    <>
      <TitleStyled>{props.titulo}</TitleStyled>
      <SubtitleStyled>{props.subtitulo}</SubtitleStyled>
    </>
  );
}
