import { useI18n } from "src/contexts/i18n";

import { Card } from "./card";
import { Container, Error } from "codiedigital";

import { IShopsListProps } from "./interface";

import * as S from "./styles";

export function ShopsList({ title, data }: IShopsListProps) {
  const { translate, locale } = useI18n();
  const isBrazil = locale === "pt";

  return (
    <Error name="ShopsList">
      <S.ShopsList>
        <div className="titles">
          <h1 className="title-1-avianoFlare">
            {title || translate.dictionary["nossos-distribuidores"]}
          </h1>

          {!isBrazil && (!data || data.length === 0) && (
            <p className="paragraph-2 text">
              {translate.dictionary["nenhum-distribuidor-encontrado"]}
            </p>
          )}
        </div>

        <Container>
          {data && data.length > 0 && (
            <div className="content">
              {!isBrazil && (
                <h2 className="title-2-regular pais">
                  {translate.dictionary["pais"]}
                </h2>
              )}

              <div className="shops-list">
                {data.map((distributor) => (
                  <div key={"content" + distributor.id} className="shops-box">
                    <Card key={"shop-card" + distributor.id} {...distributor} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </S.ShopsList>
    </Error>
  );
}
