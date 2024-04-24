import { IShopList } from "src/interfaces/shops";

import { ICardProps } from "./card/interface";

export interface ICitiesListProps {
  titulo: string;
  data: ICardProps[];
}

export interface IShopsListProps {
  title?: string;
  data?: IShopList[];
}
