import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { Error, PostContent, HeadComponent, useHeader } from "codiedigital";

import { useI18n } from "src/contexts/i18n";
import { checkLanguage } from "src/utils/checkLanguage";
import { IBlogCategories } from "src/interfaces/blog-categories";
import { api } from "src/services/api";

import { Layout } from "components/layout";

import { IDetach } from "src/interfaces/blogs";

import * as S from "styles/pages/post";

export default function PostPage({ postDetail, detachList, blogCategories }) {
  const { translate } = useI18n();

  const filterList =
    blogCategories && blogCategories.length > 0
      ? blogCategories.map((category) => {
          return {
            id: category.id,
            url: category.url,
            titulo: category.titulo,
          };
        })
      : [{ id: 0, url: "", titulo: "" }];

  return (
    <Layout noBg>
      {postDetail && postDetail.head && (
        <HeadComponent headContent={postDetail.head} />
      )}

      <Error name="PostPage">
        <S.PostPage>
          {postDetail.detail && filterList && detachList ? (
            <PostContent
              categories={{
                data: {
                  title: translate.dictionary["filtros"],
                },
                list: filterList,
              }}
              newsLetter={{
                title: translate.dictionary["newsletter"],
                description:
                  translate.dictionary[
                    "cadastre-se-para-receber-lancamentos-e-noticias"
                  ],
              }}
              featuredBlogs={{
                data: {
                  title: translate.dictionary["destaques"],
                },
                list: detachList,
              }}
              postDetail={postDetail}
            />
          ) : (
            <h2
              className="title-4"
              style={{ padding: "200px 0", textAlign: "center" }}
            >
              {
                translate.dictionary[
                  "desculpe-houve-um-problema-com-esse-post-estamos-trabalhando-para-corrigir"
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
  const language = checkLanguage(ctx.query.lang as string);

  const responsePostDetail = await api.get("blog/detail/" + url);

  const responseDetach = await api.get<IDetach[]>(
    "blog/destaques/por-idioma?idiomaId=" + language.id
  );

  const responseBlogCategories = await api.get<IBlogCategories[]>(
    "blog/categorias/por-idioma/" + language.id
  );

  return {
    props: {
      detachList: responseDetach.data,
      postDetail: responsePostDetail.data,
      blogCategories: responseBlogCategories.data,
    },
  };
};
