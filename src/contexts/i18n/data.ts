import {
  BrazilIcon,
  FranceIcon,
  GreeceIcon,
  ItalianIcon,
  PolandIcon,
  SpanishIcon,
  UnitedStateIcon,
} from "components/icons";

export type TLanguage = "pt" | "en" | "gr" | "es" | "it" | "fr" | "pl";

export type TLanguageObject = {
  lang: TLanguage;
  id: number;
  icon?: React.ElementType;
};

export const languages: TLanguageObject[] = [
  {
    lang: "pt",
    id: 1,
    icon: BrazilIcon,
  },
  {
    lang: "en",
    id: 2,
    icon: UnitedStateIcon,
  },
  {
    lang: "gr",
    id: 3,
    icon: GreeceIcon,
  },

  {
    lang: "es",
    id: 4,
    icon: SpanishIcon,
  },
  {
    lang: "it",
    id: 5,
    icon: ItalianIcon,
  },
  {
    lang: "fr",
    id: 6,
    icon: FranceIcon,
  },
  {
    lang: "pl",
    id: 7,
    icon: PolandIcon,
  },
];
