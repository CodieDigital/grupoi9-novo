import { NextImage } from 'codieweb/dist/cjs/components/data/next-image';

import { pathsApi } from 'src/services/api';

import { Container } from 'components/data';

import { IPageInformations } from 'src/interfaces/pageInformations';

import * as S from './styles';

export function TextImage2({ data }: { data: IPageInformations }) {
  return (
    <S.TextImage2>
      <Container>
        <div className="box-left">
          <div className="box-text">
            {data.titulo1Sessao2 && (
              <h2
                className="title-3-avianoFlare-medium title"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {data.titulo1Sessao2}
              </h2>
            )}

            {data.texto1Sessao2 && (
              <div
                className="paragraph-2 description"
                dangerouslySetInnerHTML={{
                  __html: data.texto1Sessao2,
                }}
                data-aos="fade-up"
                data-aos-duration="1500"
              ></div>
            )}
          </div>

          <div className="box-text">
            {data.titulo2Sessao2 && (
              <h2
                className="title-3-avianoFlare-medium title"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {data.titulo2Sessao2}
              </h2>
            )}

            {data.texto2Sessao2 && (
              <div
                className="paragraph-2 description"
                dangerouslySetInnerHTML={{
                  __html: data.texto2Sessao2,
                }}
                data-aos="fade-up"
                data-aos-duration="1500"
              ></div>
            )}
          </div>
        </div>

        {data.imagemSessao2 && (
          <NextImage
            pathsApi={pathsApi}
            className="image"
            isUploads
            src={data.imagemSessao2}
            hasAos
          />
        )}
      </Container>
    </S.TextImage2>
  );
}
