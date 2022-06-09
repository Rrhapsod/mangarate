import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";

export function useCadastro() {
  const [nome, setNome] = useState(""),
    [resumo, setResumo] = useState(""),
    [capa, setCapa] = useState(""),
    [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (validarFormulario()) {
      ApiService.post("/mangas", {
        nome,
        resumo,
        capa,
      })
        .then(() => {
          limpar();
          setMensagem("Mangá cadastrado com sucesso!");
        })
        .catch((error: AxiosError) => {
          setMensagem(error.response?.data.message);
        });
    } else {
      setMensagem("Preencha os campos corretamente!");
    }
  }

  function validarFormulario() {
    return nome.length > 1 && resumo.length > 10 && capa.length > 3;
  }

  function limpar() {
    setNome("");
    setResumo("");
    setCapa("");
  }

  return {
    nome,
    resumo,
    capa,
    setNome,
    setResumo,
    setCapa,
    cadastrar,
    mensagem,
    setMensagem,
  };
}
