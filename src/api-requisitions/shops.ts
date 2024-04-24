import { api } from "codiedigital";

import { IGenericItem } from "src/interfaces/generic-item";

import { IShops } from "src/interfaces/shops";

export async function getShopData(
  estado: string | string[] | undefined
): Promise<IGenericItem> {
  try {
    const shopData = await api.get<IShops>("Loja/list/" + estado);
    const internationalShopData = await api.get<IShops>(
      "/Lojainternacional/listinternacional"
    );

    return {
      shopData: shopData.data,
      internationalShopData: internationalShopData.data,
    };
  } catch (error: any) {
    console.error("Erro ao obter os dados do Shop ", error);
    return { shopData: {}, internationalShopData: {} };
  }
}
