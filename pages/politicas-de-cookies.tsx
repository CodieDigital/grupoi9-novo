import { GetServerSideProps } from "next";

import { Container, HeadComponent } from "codiedigital";

import { checkLanguage } from "src/utils/checkLanguage";
import { getCookiesData } from "src/api-requisitions/cookies-policy";

import { Layout } from "components/layout";

import { IPageInformations } from "src/interfaces/pageInformations";

import * as S from "styles/pages/termos-politicas";
export default function TermsPage({
  pageContent,
}: {
  pageContent: IPageInformations;
}) {
  return (
    <Layout noBg>
      {pageContent.head && <HeadComponent headContent={pageContent.head} />}

      <S.TermosPoliticas>
        <Container>
          {pageContent && (
            <>
              <div className="content">
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
