import { Manga } from "./Manga";

export interface Relatorio {
  id: number;
  email: string;
  nota: string;
  manga: Manga;
}
