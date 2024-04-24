import { NextImage } from "codiedigital";

import { Container, Error } from "components/data";

import { IPageInformations } from "src/interfaces/pageInformations";

import * as S from "./styles";

interface ITextImage {
  data: IPageInformations;
}

export function TextImage({ data }: ITextImage) {
  return (
    <Error name="text-image">
      <S.TextImage>
        <Container>
          <div className="box-left">
            {data.tituloBox1 && data.textoBox1 && (
              <div
                className="box-text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="box-title">
                  {data.subtituloBox1 && (
                    <span className="paragraph-2 uppercase">
                      {data.subtituloBox1}
                    </span>
                  )}

                  <h2 className="title-1-avianoFlare-medium">
                    {data.tituloBox1}
                  </h2>
                </div>

                <div
                  className="paragraph-2 text"
                  dangerouslySetInnerHTML={{
                    __html: data.textoBox1,
                  }}
                ></div>
              </div>
            )}

            {data.tituloBox2 && data.textoBox2 && (
              <div
                className="box-text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="box-title">
                  {data.subtituloBox2 && (
                    <span className="paragraph-2 uppercase">
                      {data.subtituloBox2}
                    </span>
                  )}

                  <h2 className="title-1-avianoFlare-medium">
                    {data.tituloBox2}
                  </h2>
                </div>

                <div
                  className="paragraph-2 text"
                  dangerouslySetInnerHTML={{
                    __html: data.textoBox2,
                  }}
                ></div>
              </div>
            )}

            {data.tituloBox3 && data.textoBox3 && (
              <div
                className="box-text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="box-title">
                  {data.subtituloBox3 && (
                    <span className="paragraph-2 uppercase">
                      {data.subtituloBox3}
                    </span>
                  )}

                  <h2 className="title-1-avianoFlare-medium">
                    {data.tituloBox3}
                  </h2>
                </div>

                <div
                  className="paragraph-2 text"
                  dangerouslySetInnerHTML={{
                    __html: data.textoBox3,
                  }}
                ></div>
              </div>
            )}
          </div>

          {(data.imagem1 || data.imagem2) && (
            <div className="box-right">
              {data.imagem1 && (
                <div className="leafs">
                  <NextImage src={data.imagem1} baseImage />
                </div>
              )}

              {data.imagem2 && (
                <div className="photo">
                  <NextImage src={data.imagem2} baseImage />
                </div>
              )}
            </div>
          )}
        </Container>
      </S.TextImage>
    </Error>
  );
}
