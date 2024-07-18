import { HeadComponent } from "codiedigital";

import { GetServerSideProps } from "next";

import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";
import { Banner } from "components/sections/general";
import { Objective } from "components/sections/community";

import * as S from "styles/pages/community";

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

  const objectiveData = [
    {
      titulo: "missão",
      descricao:
        "Conectar apaixonados pela nossa marca e setor, impulsionando a visibilidade e reputação de empresa. Estamos comprometidos em criar uma comunidade digital vibrante, onde ideias fluem, conexões são fortalecidas e a demanda é gerada através do poder da colaboração.",
    },
    {
      titulo: "visão",
      descricao:
        "Ser a principal comunidade digital que inspira, capacita e amplifica a presença das marca Papel para Mechas no cenário digital, transformando admiradores em embaixadores engajados e convertendo interações em oportunidades de negócios",
    },
  ];

  return (
    <Layout>
      <S.Community>
        <HeadComponent headContent={{ pageTitle: "Comunidade" }} />

        <Banner
          titleAlign="left"
          video="/videos/video-community.mp4"
          data={bannerData}
        />

        <Objective cards={objectiveData} />
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
