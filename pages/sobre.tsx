import { GetServerSideProps } from "next";

import { HeadComponent } from "codiedigital";

import { useI18n } from "src/contexts/i18n";
import { getAboutData } from "src/api-requisitions/about";
import { checkLanguage } from "src/utils/checkLanguage";

import { Layout } from "components/layout";
import {
  Banner,
  TextImage,
  TitleText,
  CountUpNumbers,
  VideoImageText,
} from "components/sections/general";

import { IPageInformations } from "src/interfaces/pageInformations";

interface IAboutPage {
  pageContent: IPageInformations;
}

export default function AboutPage({ pageContent }: IAboutPage) {
  const { translate } = useI18n();

  const VideoImageText3 = {
    video: "/videos/conheca-2.mp4",
    title: pageContent && pageContent.tituloSessaoVideo,
    subtitle:
      pageContent &&
      (pageContent.tituloSessaoVideo || pageContent.textoSessaoVideo) &&
      translate.dictionary["assista"],
    youtubeLink: pageContent && pageContent.link,
    youtubeTextButton: pageContent && pageContent.botaoSessaoVideo,
    description: pageContent && pageContent.textoSessaoVideo,
  };

  return (
    <Layout>
      {pageContent && pageContent.head && (
        <HeadComponent headContent={pageContent.head} />
      )}

      {pageContent && pageContent.banner && (
        <Banner video="/videos/video-about.mp4" data={pageContent.banner[0]} />
      )}

      {pageContent && pageContent.tituloSessao1 && pageContent.textoSessao1 && (
        <TitleText
          title={pageContent.tituloSessao1}
          text={pageContent.textoSessao1}
        />
      )}

      {pageContent &&
        (pageContent.tituloBox1 ||
          pageContent.tituloBox2 ||
          pageContent.tituloBox3 ||
          pageContent.textoBox1 ||
          pageContent.textoBox2 ||
          pageContent.textoBox3) && <TextImage data={pageContent} />}

      <VideoImageText data={VideoImageText3} />

      {pageContent && (
        <TitleText
          title={pageContent.tituloSessao2}
          text={pageContent.textoSessao2}
        />
      )}

      {pageContent &&
        pageContent.papeisProduzidos &&
        pageContent.clientesSatisfeitos && (
          <CountUpNumbers data={pageContent} />
        )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=3600"
  );

  const { aboutData } = await getAboutData();

  return {
    props: {
      pageContent: aboutData[checkLanguage(ctx.query.lang as string).lang],
    },
  };
};
