import { SwiperOptions } from "swiper";

export const swiperConfigs: SwiperOptions = {
  // navigation: {
  //   enabled: true,
  // },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
  },
};
