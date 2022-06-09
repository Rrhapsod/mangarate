import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { NextPage } from "next";
import { useRelatorio } from "../../data/hooks/pages/mangas/UseRelatorio";
import Title from "../../ui/components/Title/Title";

const Relatorio: NextPage = () => {
  const { listaRelatorio } = useRelatorio();
  return (
    <>
      <Title
        titulo={"Relatório de Avaliações"}
        subtitulo={"Veja a lista de avaliações recebidas"}
      />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 830, mx: "auto", p: { xs: 3, md: 5 } }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mangá</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Nota</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaRelatorio.map((relatorio) => (
              <TableRow key={relatorio.id}>
                <TableCell>{relatorio.manga.nome}</TableCell>
                <TableCell>{relatorio.email}</TableCell>
                <TableCell>{relatorio.nota}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Relatorio;
