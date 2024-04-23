import { useEffect } from "react";

import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import { AppProps } from "next/app";

import CookieConsent from "react-cookie-consent";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  IConfigs,
  ConfigSiteProvider,
  GetInitialConfigsSite,
} from "codiedigital";
// import { ConfigSiteProvider } from "codieweb/dist/cjs/contexts/configs";

import AOS from "aos";

import SwiperCore, {
  Thumbs,
  Virtual,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

import { pathsApi, siteUrl } from "src/services/api";
import { I18nProvider, countrys } from "src/contexts/i18n";
import { checkLanguage } from "src/utils/checkLanguage";

import { CookiesModal } from "components/data/cookies-modal";
import { CookiesOptionsModal } from "components/data/cookies-options-modal";

import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "styles/reset.css";
import "styles/fonts.css";
import "swiper/swiper-bundle.css";
import "codiedigital/dist/fonts.css";
import "react-toastify/dist/ReactToastify.css";
import { theme, InputStyles } from "src/init-project";
import { GlobalStyle } from "styles/global";
SwiperCore.use([Thumbs, Virtual, Autoplay, Pagination, Navigation, EffectFade]);

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const cookiesContentTransleted =
    countrys[checkLanguage(router.query.lang as string).lang].dictionary;

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <ConfigSiteProvider
      toast={toast}
      Swiper={Swiper}
      theme={theme}
      InputStyles={InputStyles}
      EffectFade={EffectFade}
      SwiperSlide={SwiperSlide}
      configs={{}}
    >
      <I18nProvider>
        <Head>
          {pathsApi.projectName && <title>{pathsApi.projectName}</title>}

          <link rel="preconnect" href={pathsApi.apiURL} />
          <link rel="preconnect" href={pathsApi.base} />
          <link
            rel="preconnect"
            href={process.browser ? window.location.origin : ""}
          />

          <link
            rel="canonical"
            href={process.browser ? window.location.origin : ""}
          />

          <link rel="icon" href="/images/favicon.png" />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no viewport-fit=cover"
          />
          <meta name="robots" content="index, follow" />
          <meta name="referrer" content="origin" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="author" content="Codie" />
          <meta name="rating" content="general" />
          <meta name="keyboard-shortcuts-preference" content="all"></meta>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0LCC74D7H4"
          ></script>

          <script
            type="application/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0LCC74D7H4');`,
            }}
          ></script>

          <script
            type="text/javascript"
            async
            src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/3a92cfa3-8563-485c-91c0-d714fad1132d-loader.js"
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-DG6GBM82E1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DG6GBM82E1');`,
            }}
          />
        </Head>

        <GlobalStyle />

        <ToastContainer />

        <Component {...pageProps} />
        {/* <CookiesModal /> */}

        <CookieConsent
          buttonText="Aceito"
          buttonClasses="link-1 cookies-button"
        >
          <div className="paragraph-3">
            {
              cookiesContentTransleted[
                "nosso-site-armazena-cookies-e-pode-realizar-a-coleta-de-dados-pessoais-para-auxiliar-e-personalizar-sua-experiencia-de-navegacao-ao-utilizar-nossos-servicos-voce-declara-estar-ciente-destas-condicoes-e-podera-ter-acesso-a-mais-detalhes-em-nossa"
              ]
            }{" "}
            <Link href="/politicas-de-privacidade">
              {cookiesContentTransleted["politica-de-privacidade"]}
            </Link>
            .
          </div>
        </CookieConsent>
      </I18nProvider>
    </ConfigSiteProvider>
  );
};

//sobe

export default App;
