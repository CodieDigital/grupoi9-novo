import { SwiperOptions } from "swiper";

export const swiperConfigs: SwiperOptions = {
  navigation: {
    enabled: true,
  },
  breakpoints: {
    1400: { slidesPerView: 3, spaceBetween: 0 },
    1201: { slidesPerView: 3, spaceBetween: 0 },
    1025: { slidesPerView: 3, spaceBetween: 0 },
    769: { slidesPerView: 2, spaceBetween: 0 },
    651: { slidesPerView: 2, spaceBetween: 0 },
    0: { slidesPerView: 1, spaceBetween: 0 },
  },
};
