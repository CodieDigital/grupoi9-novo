import { api } from 'src/services/api';

import { ShopMockData } from 'src/mock-data/shop';
import { IShops } from 'src/interfaces/shops';

export async function getShopData(estado: string | string[] | undefined) {
  try {
    const responseShopData = await api
      .get<IShops>('Loja/list/' + estado)
      .catch(() => ({ data: null }));
    const shopData = responseShopData?.data || ShopMockData;

    return { shopData };
  } catch (error: any) {
    console.error('Erro ao obter os dados do Shop ', error);
    return { shopData: ShopMockData };
  }
}
