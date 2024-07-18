import { SwiperOptions } from "swiper";

export const swiperConfigs: SwiperOptions = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1800: { slidesPerView: 8.5 },
    1600: { slidesPerView: 7.5 },
    1400: { slidesPerView: 6.5 },
    1200: { slidesPerView: 5.5 },
    1024: { slidesPerView: 4.5 },
    768: { slidesPerView: 3.5 },
    450: { slidesPerView: 2.5 },
    0: { slidesPerView: 1 },
  },
};
