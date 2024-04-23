import { Icon, Error } from "codiedigital";

import { IShopList } from "src/interfaces/shops";
import { IRedesSociais } from "./interface";

import * as S from "./styles";

export function Card({
  titulo,
  twitter,
  celular,
  telefone,
  linkedin,
  endereco,
  facebook,
  instagram,
}: IShopList) {
  const redesSociais: IRedesSociais[] = [
    {
      name: "twitter",
      url: twitter,
      icon: "TwitterIcon",
    },
    {
      name: "facebook",
      url: facebook,
      icon: "FacebookIcon",
    },
    {
      name: "instagram",
      url: instagram,
      icon: "InstagramIcon",
    },
    {
      name: "linkedin",
      url: linkedin,
      icon: "LinkedinIcon",
    },
  ];

  return (
    <Error name="Card">
      <S.Card className="shop-card">
        {titulo && (
          <div className="title-shop">
            <h3 className="title-5-bold uppercase">{titulo}</h3>
          </div>
        )}

        {endereco && (
          <div className="street">
            <span className="paragraph-1-regular">{endereco}</span>
          </div>
        )}

        <div className="contact-box">
          {telefone && (
            <span className="paragraph-1-regular">
              <div className="icon">
                <Icon name="PhoneIcon" />
              </div>
              {telefone}
            </span>
          )}

          {celular && (
            <span className="paragraph-1-regular">
              <div className="icon">
                <Icon name="IconWhats" />
              </div>
              {celular}
            </span>
          )}
        </div>

        <div className="redes-box">
          {redesSociais.map((social) => (
            <>
              {social.url && (
                <a
                  className="paragraph-1-regular"
                  href={social.url}
                  target="_blank"
                  key={social.name}
                >
                  <span>
                    <Icon name={social.icon} />
                  </span>

                  {social.name}
                </a>
              )}
            </>
          ))}
        </div>
      </S.Card>
    </Error>
  );
}
