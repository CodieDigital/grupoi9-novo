import "styled-components";
import { ITheme } from "src/init-project/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

export interface IThemeStyledComponentProps {
  theme: import("styled-components").DefaultTheme;
}
