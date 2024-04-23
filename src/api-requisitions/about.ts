import { api } from 'src/services/api';

import { AboutMockData } from 'src/mock-data/about';
import { IPageInformations } from 'src/interfaces/pageInformations';

export async function getAboutData() {
  try {
    const responseAboutData = await api
      .get<IPageInformations>('pages/sobre')
      .catch(() => ({ data: null }));
    const aboutData = responseAboutData?.data || AboutMockData;

    return { aboutData };
  } catch (error: any) {
    console.error('Erro ao obter os dados do About ', error);
    return { aboutData: AboutMockData };
  }
}
