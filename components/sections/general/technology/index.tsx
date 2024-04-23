import { Container, NextImage } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import * as S from "./styles";

interface ITechnology {
  title: string;
  text: string;
}

export function Technology({ title, text }: ITechnology) {
  const { translate } = useI18n();

  const data = [
    {
      image: "/images/industry-box/1.png",
      text: translate.dictionary["nao-contem-metal"], //ok
    },
    {
      image: "/images/industry-box/10.png",
      text: translate.dictionary["facil-aplicacao"], //ok
    },
    {
      image: "/images/industry-box/5.png",
      text: translate.dictionary["100-reciclavel"], //ok
    },
    {
      image: "/images/industry-box/2.png",
      text: translate.dictionary[
        "compativel-com-produto-quimico-utilizado-na-descoloracao"
      ], //ok
    },
    {
      image: "/images/industry-box/6.png",
      text: translate.dictionary["fabricado-a-partir-de-recursos-sustentaveis"], //ok
    },
    {
      image: "/images/industry-box/3.png",
      text: translate.dictionary["cor-uniforme-da-raiz-as-pontas"], //ok
    },
    {
      image: "/images/industry-box/12.png",
      text: translate.dictionary["otimiza-tempo-no-processo-de-descoloracao"], //ok
    },
    {
      image: "/images/industry-box/13.png",
      text: translate.dictionary["produto-reutilizavel"], //ok
    },
    {
      image: "/images/industry-box/4.png",
      text: translate.dictionary["melhor-aderencia-e-maior-isolamento"], //ok
    },
    {
      image: "/images/industry-box/9.png",
      text: translate.dictionary["protege-a-integridade-dos-fios"], //ok
    },
    {
      image: "/images/industry-box/7.png",
      text: translate.dictionary["folhas-ja-cortadas-nao-enroscam"], //ok
    },
    {
      image: "/images/industry-box/8.png",
      text: translate.dictionary["janela-de-visibilidade"], //ok
    },
    {
      image: "/images/industry-box/11.png",
      text: translate.dictionary["economia-de-po-descolorante"], //ok
    },
  ];

  return (
    <S.Technology>
      <Container>
        <div className="box-text">
          {title && (
            <h2
              className="title-3-avianoFlare-medium title"
              data-aos="fade-up"
              data-aos-duration="1500"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          )}

          {text && (
            <div
              className="paragraph-2 text"
              dangerouslySetInnerHTML={{ __html: text }}
              data-aos="fade-up"
              data-aos-duration="1500"
            ></div>
          )}
        </div>

        <div className="box-icons">
          {data.map((card, index) => (
            <div
              key={index}
              className="card"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="image-card">
                <NextImage src={card.image} />
              </div>

              <h2 className="paragraph-2-scandiaBold">{card.text}</h2>
            </div>
          ))}
        </div>
      </Container>
    </S.Technology>
  );
}
