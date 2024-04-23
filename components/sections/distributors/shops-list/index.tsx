import { useI18n } from "src/contexts/i18n";

import { Card } from "./card";
import { Container, Error } from "components/data";

import { IShopList } from "src/interfaces/shops";

import * as S from "./styles";

export function ShopsList({ data }: { data: IShopList[] }) {
  const { translate } = useI18n();

  return (
    <Error name="ShopsList">
      <S.ShopsList>
        <div className="titles">
          <h1 className="title-1-avianoFlare">
            {translate.dictionary["nossos-distribuidores"]}
          </h1>

          {(!data || data.length === 0) && (
            <p className="paragraph-2 text">
              {translate.dictionary["nenhum-distribuidor-encontrado"]}
            </p>
          )}
        </div>

        <Container>
          {data && data.length > 0 && (
            <div className="content">
              <h2 className="title-2-regular pais">
                {translate.dictionary["pais"]}
              </h2>

              {data.map((distributor) => (
                <div key={"content" + distributor.id} className="shops-box">
                  {data.map((cardData) => (
                    <Card key={"shop-card" + cardData.id} {...cardData} />
                  ))}
                </div>
              ))}
            </div>
          )}
        </Container>
      </S.ShopsList>
    </Error>
  );
}
