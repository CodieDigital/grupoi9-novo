import { GetServerSideProps } from "next";

import { HeadComponent } from "codiedigital";

import { useI18n } from "src/contexts/i18n";
import { getHomeData } from "src/api-requisitions/home";
import { checkLanguage } from "src/utils/checkLanguage";

import { Layout } from "components/layout";
import { BoxFloating } from "components/data";
import { Industry } from "components/sections/home";
import { Banner, TextCards, VideoImageText } from "components/sections/general";

import { IPageInformations } from "src/interfaces/pageInformations";

interface IHomePage {
  pageContent: IPageInformations;
}

export default function HomePage({ pageContent }: IHomePage) {
  const { translate } = useI18n();

  const textCards1 = {
    id: "campanhas",
    title: pageContent && pageContent.tituloCampanha,
    subtitle: translate.dictionary["nossas-campanhas"],
    description: pageContent && pageContent.campanhas,
  };

  const textCards2 = {
    id: "blog",
    title: translate.dictionary["comunidade"],
    subtitle: translate.dictionary["fique-por-dentro"],
    description: pageContent && pageContent.i9Blog,
  };

  const VideoImageText1 = {
    video: "/videos/video-conheca.mp4",
    title: pageContent && pageContent.tituloSessaoVideo,
    description: pageContent && pageContent.textoSessaoVideo,
  };

  const VideoImageText2 = {
    image: "/images/leafs.webp",
    title: translate.dictionary["nosso-compromisso"],
    subtitle: pageContent && pageContent.subtituloBanner,
    description: pageContent && pageContent.sustentabilidade,
  };

  return (
    <Layout>
      {pageContent && pageContent.head && (
        <HeadComponent headContent={pageContent.head} />
      )}

      {pageContent && pageContent.papeisProduzidos && (
        <BoxFloating numbers={pageContent.papeisProduzidos} />
      )}
      {pageContent && pageContent.banner && (
        <Banner
          titleAlign="left"
          video={"/videos/video-home.mp4"}
          data={pageContent.banner[0]}
          isHome
        />
      )}

      {pageContent &&
        pageContent.nossasCampanhas &&
        pageContent.nossasCampanhas.length > 0 && (
          <TextCards data={textCards1} list={pageContent.nossasCampanhas} />
        )}

      <VideoImageText data={VideoImageText1} />

      {pageContent && pageContent.blogs && pageContent.blogs.length > 0 && (
        <TextCards isBlog data={textCards2} list={pageContent.blogs} />
      )}

      <VideoImageText data={VideoImageText2} />

      <Industry data={pageContent} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=3600"
  );

  const { homeData } = await getHomeData();

  return {
    props: {
      pageContent: homeData[checkLanguage(ctx.query.lang as string).lang],
    },
  };
};
