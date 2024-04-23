import { api } from 'src/services/api';

import { IndustryMockData } from 'src/mock-data/industry';
import { IPageInformations } from 'src/interfaces/pageInformations';

export async function getIndustryData() {
  try {
    const responseIndustryData = await api
      .get<IPageInformations>('pages/industria')
      .catch(() => ({ data: null }));
    const industryData = responseIndustryData?.data || IndustryMockData;

    return { industryData };
  } catch (error: any) {
    console.error('Erro ao obter os dados do Industry ', error);
    return { industryData: IndustryMockData };
  }
}
