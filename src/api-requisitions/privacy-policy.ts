import { api } from "codiedigital";
import { PolicyMockData } from "src/mock-data/privacy-policy";
import { IPageInformations } from "src/interfaces/pageInformations";

export async function getPolicyData() {
  try {
    const responsePolicyData = await api
      .get<IPageInformations>("pages/politica-de-privacidade")
      .catch(() => ({ data: null }));
    const policyData = responsePolicyData?.data || PolicyMockData;

    return { policyData };
  } catch (error: any) {
    console.error(
      "Erro ao obter os dados da página políticas de privacidade ",
      error
    );
    return { policyData: PolicyMockData };
  }
}
