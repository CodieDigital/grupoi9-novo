import Head from "next/head";

import { useRouter } from "next/router";

import { Button } from "codieweb/dist/cjs/components/data/simple-button";

import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";

import { Container } from "components/data/";

import * as S from "styles/pages/success";

export default function SuccessPage() {
  const { query } = useRouter();
  const { translate } = useI18n();
  const router = useRouter();

  return (
    <Layout noBg>
      <Head>
        <title>{translate.dictionary["sucesso"]}</title>
        <meta name="description" content={translate.dictionary["sucesso"]} />
        <meta
          itemProp="description"
          content={translate.dictionary["sucesso"]}
        />
        <meta
          name="twitter:description"
          content={translate.dictionary["sucesso"]}
        />
        <meta name="og:description" content={translate.dictionary["sucesso"]} />
        <meta property="og:title" content={translate.dictionary["sucesso"]} />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.SuccessPage>
        <Container>
          <h2 className="title-4-ndBold">
            {translate.dictionary["contato-enviado"]}!
          </h2>

          <p className="paragraph-1-ndMedium">
            {translate.dictionary["obrigado"]} {query.name}{" "}
            {translate.dictionary["pelo-contato"]}!
          </p>

          <Button
            buttonData={{
              hasBg: true,
              text: translate.dictionary["voltar"],
              url: "/",
            }}
          />
        </Container>
      </S.SuccessPage>
    </Layout>
  );
}
