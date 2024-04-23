import { useState } from "react";

import { Icon, Container } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { BrazilMapIcon } from "components/icons/Brazil-map";

import { IShopList } from "src/interfaces/shops";

import * as S from "./styles";

export function MapClients({ shopList }: { shopList: IShopList[] }) {
  const { translate } = useI18n();

  const [object, setObject] = useState<IShopList[]>([]);
  const [qnt, setQnt] = useState(0);

  const estados = {};
  shopList.forEach((item) => {
    const estado = item.estadoTitle;

    if (!estados[estado]) {
      estados[estado] = [];
    }

    estados[estado].push(item);
  });

  const handleObject = (data) => setObject(data);

  const onEstateClick = (st: string) => {
    const arrayState = estados[st];

    console.log(handleObject(arrayState));
    return handleObject(arrayState);
  };

  const onEstateHover = (st: string) => {
    const arrayStateQnt = estados[st];
    console.log(setQnt(arrayStateQnt ? arrayStateQnt.length : 0));

    return setQnt(arrayStateQnt ? arrayStateQnt.length : 0);
  };

  return (
    <S.MapClients>
      <div className="titles">
        <h1 className="title-1-avianoFlare">
          {translate.dictionary["encontre-um-distribuidor"]}
        </h1>
        <span className="paragraph-2">
          {
            translate.dictionary[
              "localize-o-distribuidor-mais-proximo-de-voce-no-mapa-abaixo"
            ]
          }
        </span>
      </div>

      <Container>
        <div className="map-box">
          <BrazilMapIcon
            handleHover={onEstateHover}
            onClickFunction={onEstateClick}
          />

          {qnt > 0 && (
            <h2 className="paragraph-2 hover-box">
              {qnt}{" "}
              {
                translate.dictionary[
                  qnt === 1 ? "distribuidor" : "distribuidores"
                ]
              }
            </h2>
          )}
        </div>

        {object && (
          <div className="box-shops">
            {object.map((object, index) => (
              <div key={index} className="card">
                {object.estadoTitle && (
                  <span className="paragraph-2 uppercase city">
                    {object.estadoTitle}
                  </span>
                )}

                {object.titulo && (
                  <h2 className="paragraph-1 uppercase shop-name">
                    {object.titulo}
                  </h2>
                )}

                {(object.endereco || object.telefone || object.celular) && (
                  <ul>
                    {object.endereco && (
                      <li className="link-1 link">
                        <Icon name="PinIcon" />

                        {object.endereco}
                      </li>
                    )}

                    {object.telefone && (
                      <li className="link-1 link">
                        <Icon name="PhoneIcon" />

                        {object.telefone}
                      </li>
                    )}

                    {object.celular && (
                      <li className="link-1 link">
                        <a
                          target="_blank"
                          href={`https://api.whatsapp.com/send/?phone=55${object.celular
                            .replace("-", "")
                            .replace(/\s/g, "")
                            .replace(/[()]/g, "")}`}
                        >
                          <Icon name="IconWhatsInverse" />
                          {object.celular}
                        </a>
                      </li>
                    )}

                    {object.twitter && (
                      <li className="link-1 link">
                        <a target="_blank" href={object.twitter}>
                          <Icon name="TwitterIcon" />
                          Twitter
                        </a>
                      </li>
                    )}

                    {object.instagram && (
                      <li className="link-1 link">
                        <a target="_blank" href={object.instagram}>
                          <Icon name="InstagramIcon" />
                          Instagram
                        </a>
                      </li>
                    )}

                    {object.facebook && (
                      <li className="link-1 link">
                        <a target="_blank" href={object.facebook}>
                          <Icon name="FacebookIcon" />
                          Facebook
                        </a>
                      </li>
                    )}

                    {object.linkedin && (
                      <li className="link-1 link">
                        <a target="_blank" href={object.linkedin}>
                          <Icon name="LinkedinIcon" />
                          Linkedin
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </S.MapClients>
  );
}
