import { useState, useEffect } from "react";
import { Manga } from "../../@types/Manga";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
  const [listaMangas, setListaMangas] = useState<Manga[]>([]),
    [mangaSelecionado, setMangaSelecionado] = useState<Manga | null>(null),
    [email, setEmail] = useState(""),
    [nota, setNota] = useState(""),
    [mensagem, setMensagem] = useState("");

  useEffect(() => {
    ApiService.get("/mangas").then((resposta) => {
      setListaMangas(resposta.data);
    });
  });

  function adotar() {
    if (mangaSelecionado !== null) {
      if (validarDadosAvaliacao()) {
        ApiService.post("/avaliacoes", {
          manga_id: mangaSelecionado.id,
          email,
          nota,
        })
          .then(() => {
            setMangaSelecionado(null);
            setMensagem("Tudo certo! Obrigado por avaliar nossos mangás!");
            limparFormulario();
          })
          .catch((error: AxiosError) => {
            setMensagem(error.response?.data.message);
          });
      } else {
        setMensagem("Por favor, preencha os campos corretamente...");
      }
    }
  }

  function validarDadosAvaliacao() {
    return email.length > 0 && nota.length > 0;
  }

  function limparFormulario() {
    setEmail("");
    setNota("");
  }

  return {
    listaMangas,
    mangaSelecionado,
    setMangaSelecionado,
    email,
    setEmail,
    nota,
    setNota,
    mensagem,
    setMensagem,
    adotar,
  };
}
