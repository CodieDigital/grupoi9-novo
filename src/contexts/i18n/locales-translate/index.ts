import { TLanguage } from "../data";

import { en } from "./en/index.ts";
import { es } from "./es/index.ts";
import { fr } from "./fr/index.ts";
import { gr } from "./gr/index.ts";
import { it } from "./it/index.ts";
import { pt } from "./pt/index.ts";
import { pl } from "./pl/index.ts";

import { ITranslate } from "../interfaces";

export const countrys: { [key in TLanguage]: ITranslate } = {
  en,
  es,
  fr,
  gr,
  it,
  pt,
  pl,
};
