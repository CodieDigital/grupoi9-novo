import { api } from "src/services/api";

import { HomeMockData } from "src/mock-data/home";
import { IPageInformations } from "src/interfaces/pageInformations";

export async function getHomeData() {
  try {
    const responseHomeData = await api
      .get<IPageInformations>("pages/home")
      .catch(() => ({ data: null }));
    const homeData = responseHomeData?.data || HomeMockData;

    return { homeData };
  } catch (error: any) {
    console.error("Erro ao obter os dados do Home ", error);
    return { homeData: HomeMockData };
  }
}
