import { IconsNames } from "codiedigital";

export interface ICardProps {
  id: number;
  titulo: string;
  subtitulo: string;
  telefone: string;
  whats: string;
}

export interface IRedesSociais {
  url: string;
  name: string;
  icon: IconsNames;
}
