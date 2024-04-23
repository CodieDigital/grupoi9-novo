import { createContext, useContext } from "react";

import { useRouter } from "next/router";
import { checkLanguage } from "src/utils/checkLanguage";

import { countrys } from "./locales-translate/index";

import { TLanguage } from "./data";

import {
  ITranslate,
  I18nContextType,
  IFormatterTranslateResponse,
} from "./interfaces";

const I18nContext = createContext<I18nContextType>({
  locale: "pt",
  formatterTranslate: () => ({ value: "" }),
  translate: countrys["pt"],
});

export const useI18n = (): I18nContextType => useContext(I18nContext);

export function I18nProvider({ children }) {
  const router = useRouter();
  const urlParam = checkLanguage(router.query.lang as string).lang;

  const language = urlParam;

  const localeState: {
    locale: TLanguage;
    translate: ITranslate;
  } = {
    locale: language,
    translate: countrys[language],
  };

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function formatterTranslate(value) {
    if (!value) {
      return { value: "default" };
    }

    // Remove acentos da entrada
    const valueWithoutAccents = removeAccents(value);

    // Divida a string em palavras usando espaços como delimitadores
    const words = valueWithoutAccents.split(/\s+/);

    // Itera sobre as palavras
    const formattedWords = words.map((word) => {
      // Remove caracteres especiais da palavra
      const formattedWord = word.replace(
        /[!@#$%^&*()\-=_+[\]{}|;':"\\<>,.?]/g,
        ""
      );
      return formattedWord.toLowerCase();
    });

    // Junte as palavras formatadas usando hífen como separador
    const formatValue = formattedWords.join("-");

    return { value: formatValue };
  }

  return (
    <I18nContext.Provider value={{ ...localeState, formatterTranslate }}>
      {children}
    </I18nContext.Provider>
  );
}
