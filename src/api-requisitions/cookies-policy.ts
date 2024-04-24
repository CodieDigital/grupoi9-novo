import { api } from "codiedigital";
import { CookiesMockData } from "src/mock-data/cookies-policy";
import { IPageInformations } from "src/interfaces/pageInformations";

export async function getCookiesData() {
  try {
    const responseCookiesData = await api
      .get<IPageInformations>("pages/politica-de-cookies")
      .catch(() => ({ data: null }));
    const cookiesData = responseCookiesData?.data || CookiesMockData;

    if (!cookiesData) {
      return {
        cookiesData: CookiesMockData,
      };
    }

    return { cookiesData };
  } catch (error: any) {
    console.error("Erro ao obter os dados da página de Termos de uso ", error);
    return { cookiesData: CookiesMockData };
  }
}
