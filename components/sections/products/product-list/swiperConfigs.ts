import { SwiperOptions } from "swiper";

export const swiperConfigs: SwiperOptions = {
  // navigation: {
  //   enabled: true,
  // },
  pagination: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    390: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
    },
  },
};
