import dynamic from "next/dynamic";

import { ConfigSiteProvider, GetInitialConfigsSite } from "codiedigital/dist";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Thumbs,
  Virtual,
  Autoplay,
  Navigation,
  EffectFade,
  Pagination,
} from "swiper";

import { InputStyles, theme } from "src/init-project";
import { LoaderOnRouteChange } from "src/context/route";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "styles/reset.css";
import "codiedigital/dist/fonts.css";

import "public/fonts/fonts.css";

import { GlobalStyle } from "styles/global";

SwiperCore.use([Pagination, Autoplay, Navigation, Virtual, EffectFade, Thumbs]);

const QueryClientProvider = dynamic(
  () => import("@tanstack/react-query").then((e) => e.QueryClientProvider),
  {
    ssr: false,
  }
);
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const App = (props) => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigSiteProvider
        toast={toast}
        EffectFade={EffectFade}
        Swiper={Swiper}
        SwiperSlide={SwiperSlide}
        theme={props.theme}
        configs={props.configs.configs}
        InputStyles={InputStyles}
      >
        <GlobalStyle />

        <ToastContainer />

        <LoaderOnRouteChange />

        <props.Component {...props.pageProps} />
      </ConfigSiteProvider>
    </QueryClientProvider>
  );
};

App.getInitialProps = async () => {
  return GetInitialConfigsSite({ theme });
};

export default App;
