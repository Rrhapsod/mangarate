import { Button, Grid, Paper, Snackbar, TextField } from "@mui/material";
import { NextPage } from "next";
import { useCadastro } from "../../data/hooks/pages/mangas/useCadastro";
import Title from "../../ui/components/Title/Title";

const Cadastro: NextPage = () => {
  const {
    nome,
    resumo,
    capa,
    setNome,
    setResumo,
    setCapa,
    cadastrar,
    mensagem,
    setMensagem,
  } = useCadastro();

  return (
    <>
      <Title
        titulo={"Cadastro de Mangás para Avaliação"}
        subtitulo={"Preencha os dados do novo Mangá"}
      />

      <Paper sx={{ maxWidth: 970, mx: "auto", p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              label={"Nome"}
              placeholder={"Digite o nome do Mangá"}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              label={"Resumo do Mangá"}
              multiline
              fullWidth
              rows={6}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={capa}
              onChange={(e) => setCapa(e.target.value)}
              label={"Capa"}
              placeholder={"Coloque a URL da imagem"}
              fullWidth
            />
            <Button
              variant={"contained"}
              color={"secondary"}
              sx={{ mt: 2 }}
              component={"a"}
              href={"https://imgur.com/upload"}
              target={"_blank"}
            >
              Enviar Imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              onClick={cadastrar}
              variant={"contained"}
              fullWidth
              sx={{ maxWidth: { sm: 200 }, mt: 4 }}
            >
              Cadastrar Mangá
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={mensagem.length > 0}
        autoHideDuration={2500}
        onClose={() => setMensagem("")}
        message={mensagem}
      />
    </>
  );
};

export default Cadastro;
