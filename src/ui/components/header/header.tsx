import { Link } from "@mui/material";
import NextLink from "next/link";
import { HeaderContainer, Logo } from "./header.style";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/images/logo.png" alt="Mangá Rate" />
      <Link component={NextLink} href={"/mangas/cadastro"}>
        <a>Painel Administrativo</a>
      </Link>
    </HeaderContainer>
  );
}
