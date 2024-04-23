import { GetServerSideProps } from "next";

import { HeadComponent } from "codieweb/dist/cjs/components/data/head";

import { painelURL } from "src/services/api";
import { checkLanguage } from "src/utils/checkLanguage";
import { getCookiesData } from "src/api-requisitions/cookies-policy";
import { IPageInformations } from "src/interfaces/pageInformations";

import { Layout } from "components/layout";
import { Container } from "components/data";

import * as S from "styles/pages/termos-politicas";
export default function TermsPage({
  pageContent,
}: {
  pageContent: IPageInformations;
}) {
  return (
    <Layout noBg>
      {pageContent.head && (
        <HeadComponent painel={painelURL} headContent={pageContent.head} />
      )}

      <S.TermosPoliticas>
        <Container>
          {pageContent && (
            <>
              <div className="content">
                {/* <p>
                  <strong>{information.item.titulo}</strong>
                </p> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: pageContent.descricao,
                  }}
                ></div>
              </div>
            </>
          )}
        </Container>
      </S.TermosPoliticas>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { cookiesData } = await getCookiesData();

  return {
    props: {
      pageContent: cookiesData[checkLanguage[ctx.query.lang as string].lang],
    },
  };
};
