import { Box, Link } from "@mui/material";
import NextLink from "next/link";
import { HeaderContainer, LinksContainer, Logo } from "./HeaderAdmin.style";

export default function HeaderAdmin() {
  return (
    <HeaderContainer>
      <div>
        <Link component={NextLink} href={"/"}>
          <a>
            <Logo src={"/images/logo.png"} alt={"Mangá Rate"} />
          </a>
        </Link>
        <LinksContainer>
          <Link component={NextLink} href={"/mangas/cadastro"}>
            <a>Cadastrar Mangá</a>
          </Link>
          <Link component={NextLink} href={"/mangas/relatorio"}>
            <a>
              Relatório{" "}
              <Box
                component={"span"}
                sx={{ display: { sm: "initial", xs: "none" } }}
              >
                de Avaliações
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  );
}
