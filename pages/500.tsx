import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "codieweb/dist/cjs/components/data/simple-button";

import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";
import { Container } from "components/data";

import * as S from "styles/pages/notfound";

export default function Page500() {
  const { translate } = useI18n();
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{translate.dictionary["pagina-nao-encontrada"]}</title>
        <meta
          name="description"
          content={
            "500 | Página não encontrada" +
            translate.dictionary["pagina-nao-encontrada"]
          }
        />
        <meta
          itemProp="description"
          content={
            "500 | Página não encontrada" +
            translate.dictionary["pagina-nao-encontrada"]
          }
        />
        <meta
          name="twitter:description"
          content={
            "500 | Página não encontrada" +
            translate.dictionary["pagina-nao-encontrada"]
          }
        />
        <meta
          name="og:description"
          content={
            "500 | Página não encontrada" +
            translate.dictionary["pagina-nao-encontrada"]
          }
        />
        <meta
          property="og:title"
          content={translate.dictionary["pagina-nao-encontrada"]}
        />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.NotFound>
        <Container>
          <p className="paragraph-1-ndBold">
            {
              translate.dictionary[
                "Houve um problema no carregamento da página"
              ]
            }{" "}
            ;(
          </p>

          <p className="paragraph-1-ndBold">
            {
              translate.dictionary[
                "clique-no-botao-abaixo-ou-tente-recarregar-a-pagina"
              ]
            }
          </p>

          <Button
            buttonData={{
              hasBg: true,
              text: translate.dictionary["recarregar"],
              url: "/",
            }}
          />
        </Container>
      </S.NotFound>
    </Layout>
  );
}
