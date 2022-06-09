import type { NextPage } from "next";
import Title from "../ui/components/Title/Title";
import Lista from "../ui/components/Lista/Lista";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title
        titulo=""
        subtitulo={
          <span>
            Gostaríamos que você <br />
            <strong>avaliasse os mangás</strong> da nossa editora.
          </span>
        }
      />

      <Lista
        mangas={listaMangas}
        onSelect={(manga) => setMangaSelecionado(manga)}
      />

      <Dialog
        open={mangaSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setMangaSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              type={"email"}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Nota"}
              type={"number"}
              fullWidth
              value={nota}
              onChange={(e) => setNota(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setMangaSelecionado(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={() => adotar()}>
            Confirmar avaliação
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem("")}
      />
    </div>
  );
};

export default Home;
