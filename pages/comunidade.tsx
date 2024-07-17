import { GetServerSideProps } from "next";

import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";
import { Banner } from "components/sections/general";

import * as S from "styles/pages/community";
import { HeadComponent } from "codiedigital";

export default function Community() {
  const { translate } = useI18n();

  const textCards1 = {
    id: "campanhas",
    title: "pageContent && pageContent.tituloCampanha",
    subtitle: 'translate.dictionary["nossas-campanhas"]',
    description: "pageContent && pageContent.campanhas",
  };

  const bannerData = {
    id: 1,
    ativo: true,
    video: "",
    imagem: "",
    url: "",
    thumbnail: "",
    dataCriacao: "",
    dataEdicao: "",
    titulo: "",
    descricao: "Conheça",
    subtitulo: "A Nossa Comunidade",
  };

  return (
    <Layout>
      <S.Community>
        <HeadComponent headContent={{ pageTitle: "Comunidade" }} />

        <Banner
          titleAlign="left"
          video="/videos/video-community.mp4"
          data={bannerData}
        />
      </S.Community>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=3600"
  );

  // const { homeData } = await getHomeData();

  return {
    props: {
      // pageContent: homeData[checkLanguage(ctx.query.lang as string).lang],
    },
  };
};
