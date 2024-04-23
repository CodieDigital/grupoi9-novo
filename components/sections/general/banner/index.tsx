import Link from "next/link";

import { Icon, Error, Container } from "codiedigital";

import { useI18n } from "src/contexts/i18n";
import { pathsApi } from "src/services/api";

import { IBanners } from "src/interfaces/pageInformations";

import * as S from "./styles";

interface IBanner {
  data: IBanners;
  isHome?: boolean;
  video?: string;
  titleAlign?: "left";
}

export function Banner({ data, video, isHome, titleAlign }: IBanner) {
  const { translate } = useI18n();

  return (
    <Error name="Banner Home">
      <S.Banner
        $bgImage={pathsApi.uploads + data.imagem}
        $isHome={isHome}
        $titleAlign={titleAlign}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src={video ? video : "/videos/home-video.mp4"}
          className="back-video"
        ></video>

        <Container>
          {data.subtitulo && (
            <span className="paragraph-2 uppercase">{data.subtitulo}</span>
          )}

          {data.descricao && (
            <h1
              className="title-1-avianoFlare-medium uppercase"
              dangerouslySetInnerHTML={{ __html: data.descricao }}
            ></h1>
          )}

          {isHome && (
            <Link href="/portfolio" className="paragraph-1 link">
              <Icon name="NavDownDoubleIcon" />

              {translate.dictionary["saiba-como"]}
            </Link>
          )}
        </Container>
      </S.Banner>
    </Error>
  );
}
