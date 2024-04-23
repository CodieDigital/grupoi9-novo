import { Container, NextImage } from "codiedigital";

import { Button } from "components/data";

import { useI18n } from "src/contexts/i18n";

import { IPageInformations } from "src/interfaces/pageInformations";

import * as S from "./styles";

export function Industry({ data }: { data: IPageInformations }) {
  const { translate } = useI18n();

  return (
    <S.Industry>
      <Container>
        <div className="box-text" data-aos="fade-up" data-aos-duration="1500">
          <div className="box-title">
            <span className="paragraph-2 uppercase">
              {translate.dictionary["a-industria"]}
            </span>

            <h2
              className="-avianoFlare uppercase title"
              dangerouslySetInnerHTML={{ __html: data.tituloProduto }}
            ></h2>
          </div>

          <div
            className="paragraph-2 text"
            dangerouslySetInnerHTML={{
              __html: data.produto,
            }}
          ></div>
        </div>

        <div className="box-image" data-aos="fade-up" data-aos-duration="1500">
          <div className="card">
            <span className="paragraph-2">{data.produtoSubtitulo}</span>

            <h2 className="title-3-scandiaBold">{data.produtoNome}</h2>
          </div>

          <div className="paper">
            <NextImage src={data.produtoImagem} baseImage />
          </div>

          {data.produtoBotao && (
            <Button
              className="link-1 button-industry hide-mobile "
              text={data.produtoBotao}
              href="/campanha/tecnologia-air-flow"
            />
          )}
        </div>

        {data.produtoBotao && (
          <Button
            className="link-1 button-industry show-mobile "
            text={data.produtoBotao}
            href="/campanha/tecnologia-air-flow"
          />
        )}
      </Container>
    </S.Industry>
  );
}
