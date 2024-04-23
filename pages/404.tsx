import Head from "next/head";
import { useRouter } from "next/router";

import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";
import { Container } from "components/data/container";

import * as S from "styles/pages/notfound";

export default function Page404() {
  const { translate } = useI18n();
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{translate.dictionary["pagina-nao-encontrada"]}</title>
        <meta
          name="description"
          content={"404 | " + translate.dictionary["pagina-nao-encontrada"]}
        />
        <meta
          itemProp="description"
          content={"404 | " + translate.dictionary["pagina-nao-encontrada"]}
        />
        <meta
          name="twitter:description"
          content={"404 | " + translate.dictionary["pagina-nao-encontrada"]}
        />
        <meta
          name="og:description"
          content={"404 | " + translate.dictionary["pagina-nao-encontrada"]}
        />
        <meta
          property="og:title"
          content={translate.dictionary["Página não encontrada"]}
        />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.NotFound>
        <Container>
          <p className="paragraph-1-ndBold">
            {translate.dictionary["pagina-nao-encontrada"]} ;(
          </p>
        </Container>
      </S.NotFound>
    </Layout>
  );
}
