import { Error, NextImage } from "codiedigital";

import { IProducts } from "src/interfaces/pageInformations";

import * as S from "./styles";

export interface ICardProduct {
  data: IProducts;
}

export function CardProduct({ data }: ICardProduct) {
  return (
    <Error name="card product">
      <S.CardProduct>
        <div className="product-image">
          <NextImage src={data.imagem} baseImage />
        </div>

        <div className="box-text">
          {data.titulo && (
            <h2 className="paragraph-1 uppercase">{data.titulo}</h2>
          )}

          {data.descricao && (
            <div
              className="paragraph-2 description"
              dangerouslySetInnerHTML={{
                __html: data.descricao,
              }}
            ></div>
          )}
        </div>
      </S.CardProduct>
    </Error>
  );
}
