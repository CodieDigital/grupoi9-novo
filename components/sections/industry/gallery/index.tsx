import { Carousel, NextImage } from "codiedigital";

import { swiperConfigs } from "./swiperConfigs";

import { IIMagens } from "src/interfaces/pageInformations";

import * as S from "./styles";

interface IGallery {
  name: string;
  localData?: IData[];
  apiData?: IIMagens[];
  isContain?: boolean;
}

interface IData {
  image: string;
}

function CardLocalData({ image }: IData) {
  return (
    <div className="image">
      <NextImage src={image} />
    </div>
  );
}

function CardApiData(image: IIMagens) {
  return (
    <div className="image">
      <img
        src={
          process.env.painelURL +
          "imagens/Paginas/" +
          image.tableId +
          "/" +
          image.fileData
        }
        alt="Imagem"
      />
    </div>
  );
}

export function Gallery({ name, localData, apiData, isContain }: IGallery) {
  return (
    <S.Gallery $isContain={isContain} id="gallery">
      {localData && localData?.length > 0 && (
        <Carousel
          version="Version01"
          data={{
            id: "gallery",
            list: localData,
            Card: CardLocalData,
            swiperConfigs,
          }}
        />
      )}

      {apiData && apiData?.length > 0 && (
        <Carousel
          version="Version01"
          data={{
            id: "gallery",
            list: apiData,
            Card: CardApiData,
            swiperConfigs,
          }}
        />
      )}

      {/* <BoxSwiper
        name={name}
        hasNavigation
        navPositions={defaultNavPositions}
        breakpoints={swiperConfigs.breakpoints}
        slidesLenght={localData ? localData.length! : apiData?.length!}
      >
        {localData?.map((image, index) => (
          <SwiperSlide key={index}>
            <NextImage pathsApi={pathsApi} src={image.image} />
          </SwiperSlide>
        ))}

        {apiData?.map((image, index) => (
          <SwiperSlide key={index}>
            <NextImage
              pathsApi={pathsApi}
              isPortfolio
              src={image.tableId + "/" + image.fileData}
            />
          </SwiperSlide>
        ))}
      </BoxSwiper> */}
    </S.Gallery>
  );
}
