import { useI18n } from "src/contexts/i18n";

import { Card } from "./card";
import { Container, Error } from "codiedigital";

import { IShopList } from "src/interfaces/shops";

import * as S from "./styles";

export function ShopsList({
  data,
  isBrazil = false,
}: {
  data?: IShopList[];
  isBrazil?: boolean;
}) {
  const { translate } = useI18n();

  return (
    <Error name="ShopsList">
      <S.ShopsList>
        {!isBrazil && (
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
        )}

        <Container>
          {data && data.length > 0 && (
            <div className="content">
              {!isBrazil && (
                <h2 className="title-2-regular pais">
                  {translate.dictionary["pais"]}
                </h2>
              )}

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
