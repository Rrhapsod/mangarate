import {
  ListaStyled,
  ItemListaStyled,
  CapaStyled,
  InformacoesStyled,
  NomeStyled,
  SinopseStyled,
} from "./Lista.style";

import { Button } from "@mui/material";
import { Manga } from "../../../data/@types/Manga";
import { TextService } from "../../../data/services/TextService";

interface ListaProps {
  mangas: Manga[];
  onSelect: (manga: Manga) => void;
}

export default function Lista(props: ListaProps) {
  const tamanhoMaximoTexto = 600;

  return (
    <ListaStyled>
      {props.mangas.map((manga) => (
        <ItemListaStyled key={manga.id}>
          <CapaStyled src={manga.capa} alt={manga.nome} />
          <InformacoesStyled>
            <NomeStyled>{manga.nome}</NomeStyled>
            <SinopseStyled>
              {TextService.limitarTexto(manga.resumo, tamanhoMaximoTexto)}
            </SinopseStyled>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => props.onSelect(manga)}
            >
              Avaliar {manga.nome}
            </Button>
          </InformacoesStyled>
        </ItemListaStyled>
      ))}
    </ListaStyled>
  );
}
