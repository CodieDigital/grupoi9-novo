import { IServices } from "./pageInformations";

export interface ICategoriesHeader {
  id: number;
  link: string;
  href?: string;
  pathname?: string;
  categorias?: IServices[];
  logo?: string;
}
