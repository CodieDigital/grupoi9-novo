import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { Error, PostContent, HeadComponent } from "codiedigital";

import { api } from "src/services/api";
import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";

import * as S from "styles/pages/post";

export default function PostPage({ postDetail, detachList }) {
  const { translate } = useI18n();
  const router = useRouter();

  return (
    <Layout noBg>
      {postDetail && postDetail.head && (
        <HeadComponent headContent={postDetail.head} />
      )}

      <Error name="PostPage">
        <S.PostPage>
          {postDetail.detail ? (
            <PostContent
              postDetail={postDetail}
              newsLetter={{
                title: translate.dictionary["newsletter"],
                description:
                  translate.dictionary[
                    "cadastre-se-para-receber-lancamentos-e-noticias"
                  ],
              }}
            />
          ) : (
            <h2
              className="title-4"
              style={{ padding: "200px 0", textAlign: "center" }}
            >
              {
                translate.dictionary[
                  "desculpe-houve-um-problema-com-essa-campanha-estamos-trabalhando-para-corrigir"
                ]
              }
            </h2>
          )}
        </S.PostPage>
      </Error>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = ctx.query.url;

  const responsePostDetail = await api.get("Artigo/detail/" + url);

  return {
    props: {
      postDetail: responsePostDetail.data,
    },
  };
};
