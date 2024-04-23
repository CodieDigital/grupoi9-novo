import { Error, NextImage } from "codiedigital";

import { ILaunchs } from "src/interfaces/pageInformations";

import * as S from "./styles";

export interface ICardLaunch {
  data: ILaunchs;
}

export function CardLaunch({ data }: ICardLaunch) {
  return (
    <Error name="card launch">
      <S.CardLaunch>
        <div className="launch-image">
          <NextImage src={data.imagem} baseImage />
        </div>

        <div className="box-text">
          {data.titulo && (
            <h2 className="title-3-avianoFlare">{data.titulo}</h2>
          )}

          {data.descricao && (
            <div
              className="description paragraph-2"
              dangerouslySetInnerHTML={{
                __html: data.descricao,
              }}
            ></div>
          )}
        </div>
      </S.CardLaunch>
    </Error>
  );
}
