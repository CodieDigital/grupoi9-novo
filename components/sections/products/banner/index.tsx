import { Error, Carousel, NextImage } from "codiedigital";

import { swiperConfigs } from "./swiperConfigs";

import { IIMagens } from "src/interfaces/pageInformations";

import * as S from "./styles";

interface IBanner {
  banners: IIMagens[];
}

function Card(banner) {
  return (
    <NextImage
      src={
        process.env.painelURL +
        "imagens/Paginas/" +
        banner.tableId +
        "/" +
        banner.fileData
      }
    />
  );
}

export function Banner({ banners }: IBanner) {
  return (
    <Error name="banner products">
      <S.Banner id="banner">
        {banners && banners.length > 0 && (
          <Carousel
            version="Version01"
            data={{
              Card,
              id: "banner",
              swiperConfigs,
              list: banners,
            }}
          />
        )}

        {/* <BoxSwiper
          name={"banner"}
          slidesLenght={3}
          hasAutoPlay
          breakpoints={{ 0: { slidesPerView: 1 } }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={banner.id + index}>
              <NextImage
                pathsApi={pathsApi}
                isPortfolio
                src={banner.tableId + "/" + banner.fileData}
              />
            </SwiperSlide>
          ))}
        </BoxSwiper> */}
      </S.Banner>
    </Error>
  );
}
