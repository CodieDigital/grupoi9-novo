import { GetServerSideProps } from "next";

import { HeadComponent } from "codiedigital";

import { useI18n } from "src/contexts/i18n";
import { checkLanguage } from "src/utils/checkLanguage";
import { getIndustryData } from "src/api-requisitions/industry";
import { galleryIndustry2 } from "src/localData";

import { Layout } from "components/layout";
import {
  Banner,
  TextCards,
  TitleText,
  Technology,
  TextImage2,
  CountUpNumbers,
  VideoImageText,
} from "components/sections/general";
import { Descriptions, Gallery } from "components/sections/industry";

import { IPageInformations } from "src/interfaces/pageInformations";

interface IIndustryPage {
  pageContent: IPageInformations;
}

export default function IndustryPage({ pageContent }: IIndustryPage) {
  const { translate } = useI18n();

  const textCards1 = {
    id: "campanhas",
    title: pageContent && pageContent.tituloCampanha,
    subtitle: translate.dictionary["nossas-campanhas"],
    description:
      pageContent && pageContent.campanhas ? pageContent.campanhas : "",
  };

  return (
    <Layout>
      {pageContent && pageContent.head && (
        <HeadComponent headContent={pageContent.head} />
      )}

      {pageContent && pageContent.banner[0] && (
        <Banner
          video="/videos/video-industry.mp4"
          data={pageContent.banner[0]}
        />
      )}

      {pageContent && pageContent.descricao && (
        <TitleText type="text" text={pageContent.descricao} />
      )}

      {pageContent &&
        pageContent.papeisProduzidos &&
        pageContent.clientesSatisfeitos && (
          <CountUpNumbers data={pageContent} color={1} />
        )}

      <VideoImageText
        hasAspectRatio
        data={{ video: "/videos/video-industry-new-2.mp4" }}
      />

      {pageContent && pageContent.tituloSessao1 && pageContent.textoSessao1 && (
        <Technology
          title={pageContent.tituloSessao1}
          text={pageContent.textoSessao1}
        />
      )}

      {pageContent.imagens && pageContent.imagens.length > 0 && (
        <Gallery name={"galleryIndustryOne"} apiData={pageContent.imagens} />
      )}

      {pageContent && <TextImage2 data={pageContent} />}

      <Gallery
        name={"galleryIndustryTwo"}
        localData={galleryIndustry2}
        isContain
      />

      {pageContent && pageContent.industria && pageContent.producao && (
        <Descriptions
          textIndustry={pageContent.industria}
          textProduction={pageContent.producao}
        />
      )}

      {pageContent &&
        pageContent.nossasCampanhas &&
        pageContent.nossasCampanhas.length > 0 && (
          <TextCards data={textCards1} list={pageContent.nossasCampanhas} />
        )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=3600"
  );

  const { industryData } = await getIndustryData();

  return {
    props: {
      pageContent: industryData[checkLanguage(ctx.query.lang as string).lang],
    },
  };
};
