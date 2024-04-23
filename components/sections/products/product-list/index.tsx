import { Error, Carousel, Container } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { Card } from "components/cards";
import { swiperConfigs } from "./swiperConfigs";

import { IProducts } from "src/interfaces/pageInformations";

import * as S from "./styles";

function CardProduct(product) {
  return <Card type="product" data={product} />;
}

export function ProductsList({ productList }: { productList: IProducts[] }) {
  const { translate } = useI18n();

  return (
    <Error name="product list">
      <S.ProductsList id="products">
        <h2 className="title-1-avianoFlare uppercase title">
          {translate.dictionary["nossos-produtos"]}
        </h2>

        <Container>
          {productList.map((product, index) => (
            <Card key={index} type="product" data={product} />
          ))}
        </Container>

        {productList.length > 0 && (
          <div className="products">
            <Carousel
              version="Version01"
              data={{
                Card: CardProduct,
                id: "products",
                list: productList,
                swiperConfigs,
              }}
            />
          </div>
        )}

        {/* <BoxSwiper
          name="products"
          slidesLenght={4}
          breakpoints={defaultBreakpoints}
          slidesBreakpoints={defaultSlidesBreakpoints}
        >
          {productList.map((product, index) => (
            <SwiperSlide key={index}></SwiperSlide>
          ))}
        </BoxSwiper> */}
      </S.ProductsList>
    </Error>
  );
}
