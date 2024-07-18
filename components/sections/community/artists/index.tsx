import { Carousel, Error, IGenericItem, NextImage } from "codiedigital";

import { swiperConfigs } from "./swiper-configs";

import * as S from "./styles";

interface IArtistsProps {
  title: string;
  cards: IGenericItem[];
}

function Card(props: IGenericItem) {
  return (
    <Error name="Card">
      <div className="card">
        <div className="image">
          <NextImage src={"/images/community/person-1.png"} />

          <div className="description">
            <p className="paragraph-3">{props.descricao}</p>
          </div>
        </div>

        <div className="box-text">
          <h6 className="paragraph-2-medium">{props.titulo}</h6>
          <span className="paragraph-3">{props.subtitulo}</span>
        </div>
      </div>
    </Error>
  );
}

export function Artists({ title, cards }: IArtistsProps) {
  return (
    <Error name="Artists">
      <S.Artists>
        <h2 className="title-2-medium title uppercase">{title}</h2>

        <Carousel
          version="Version01"
          data={{
            Card,
            list: [cards, cards].flat(),
            id: "artists-section",
            swiperConfigs: swiperConfigs,
          }}
        />
      </S.Artists>
    </Error>
  );
}
