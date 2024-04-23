import { useRouter } from "next/router";

import { Error, NextImage } from "codiedigital";

import { ICardsList } from "src/interfaces/pageInformations";

import * as S from "./styles";

interface ICardCampaing {
  data: ICardsList;
  type: "campaing" | "blog";
  index: number;
}

export function CardCampaing({ data, type, index }: ICardCampaing) {
  const router = useRouter();
  return (
    <Error name="CardCampaing">
      <S.CardCampaing
        className="card"
        href={{
          pathname: type === "blog" ? "post/[url]" : "campanha/[url]",
          query: { ...router.query, url: data.url },
        }}
      >
        <div className="image-card">
          <NextImage baseImage src={data.imagem} />
        </div>

        <div className="box-description">
          <p className="paragraph-4 uppercase">
            {type === "campaing" ? data.titulo : data.categoriaTitle}
          </p>

          {data.subtitulo && (
            <div
              className="paragraph-2-scandiaBold description"
              dangerouslySetInnerHTML={{
                __html: data.subtitulo,
              }}
            ></div>
          )}
        </div>
      </S.CardCampaing>
    </Error>
  );
}
