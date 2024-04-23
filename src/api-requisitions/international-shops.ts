import { api } from "src/services/api";

import { IShops } from "src/interfaces/shops";

export async function getInternationalShopsData(
  idiomaId: number | number[] | undefined
) {
  try {
    const responseShopData = await api
      .get<IShops>("/Lojainternacional/list/" + idiomaId)
      .catch(() => ({ data: null }));
    const shopData = responseShopData?.data;

    return { shopData };
  } catch (error: any) {
    console.error("Erro ao obter os dados do Shop ", error);
    return { shopData: [] };
  }
}
