import Head from "next/head";

import { GetServerSideProps } from "next";

import { api, Error, BlogContent } from "codiedigital";

import { useI18n } from "src/contexts/i18n";
import { checkLanguage } from "src/utils/checkLanguage";

import { Layout } from "components/layout";

import { IBlogs, IDetach } from "src/interfaces/blogs";
import { IBlogCategories } from "src/interfaces/blog-categories";

import * as S from "styles/pages/blog";

export default function BlogPage({ blogList, detachList, blogCategories }) {
  const { translate } = useI18n();

  const filterList = blogCategories.map((category) => {
    return {
      id: category.id,
      url: "categoria/" + category.url,
      titulo: category.titulo,
    };
  });

  return (
    <Layout noBg>
      <Head>
        <title>Grupo i9 - {translate.dictionary["comunidade"]}</title>
      </Head>

      <Error name="Blog">
        <S.BlogPage>
          {blogList && filterList && detachList && (
            <BlogContent
              title={translate.dictionary["comunidade"]}
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
              blogList={blogList}
            />
          )}
        </S.BlogPage>
      </Error>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = ctx.query.url;
  const language = checkLanguage(ctx.query.lang as string);

  const responseBlogs = await api.get<IBlogs>(
    `blogs/list/${url}?lg=${language.id}`
  );

  const responseDetach = await api.get<IDetach[]>(
    "blog/destaques/por-idioma?idiomaId=" + language.id
  );

  const responseBlogCategories = await api.get<IBlogCategories[]>(
    "blog/categorias/por-idioma/" + language.id
  );

  return {
    props: {
      blogList: responseBlogs.data,
      detachList: responseDetach.data,
      blogCategories: responseBlogCategories.data,
    },
  };
};
