import { ICategoriesHeader } from "src/interfaces/header";

export interface MenuMobileProps {
  menu: boolean;
  pathname?: string;
  defaultFonts?: IFonts;
  data: ICategoriesHeader[];
  setStateMenu: React.Dispatch<boolean>;
}

export interface IFonts {
  title?: string;
  link?: string;
  isUppercase?: boolean;
}
