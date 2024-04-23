import { SwiperSlide } from "swiper/react";

import { Error, Carousel } from "codiedigital";

import { BoxSwiper } from "codieweb/dist/cjs/components/data/box-swiper";
import { NextImage } from "codieweb/dist/cjs/components/data/next-image";

import { pathsApi } from "src/services/api";
import { IIMagens } from "src/interfaces/pageInformations";

import { swiperConfigs } from "./swiperConfigs";

import * as S from "./styles";

interface IBanner {
  banners: IIMagens[];
}

function Card(banner) {
  return (
    <NextImage
      pathsApi={pathsApi}
      isPortfolio
      src={banner.tableId + "/" + banner.fileData}
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
