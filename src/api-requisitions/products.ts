import { api } from 'src/services/api';

import { ProductsMockData } from 'src/mock-data/products';
import { IPageInformations } from 'src/interfaces/pageInformations';

export async function getProductsData() {
  try {
    const responseProductsData = await api
      .get<IPageInformations>('pages/nossos-produtos')
      .catch(() => ({ data: null }));
    const productsData = responseProductsData?.data || ProductsMockData;

    return { productsData };
  } catch (error: any) {
    console.error('Erro ao obter os dados do Products ', error);
    return { productsData: ProductsMockData };
  }
}
