import { languages, TLanguageObject } from "src/contexts/i18n/data";

export function checkLanguage(lang: string): TLanguageObject {
  const language = languages.filter((language) => language.lang === lang);

  if (language.length > 0) {
    return language[0];
  }

  return {
    lang: "pt",
    id: 1,
  };
}
