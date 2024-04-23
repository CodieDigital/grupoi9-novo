import { Error, Container, NextImage } from "codiedigital";

import { IGenericItem } from "src/interfaces/geral";

import * as S from "./styles";

export function Banner({
  href,
  titulo,
  imagem,
  subtitulo,
  descricao,
}: IGenericItem) {
  return (
    <Error name="banner">
      <S.Banner>
        {imagem && (
          <div className="image">
            <NextImage src="/images/caminhodaimage.jpg"  />
          </div>
        )}

        <Container>
          <div className="content"></div>
        </Container>
      </S.Banner>
    </Error>
  );
}
