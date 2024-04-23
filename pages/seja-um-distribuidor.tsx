import Head from "next/head";
import { useRouter } from "next/router";

import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";
import { FormClients } from "components/sections/distributors";

export default function DistributorFormPage() {
  const { translate } = useI18n();
  const router = useRouter();

  return (
    <Layout noBg>
      <Head>
        <title>{translate.dictionary["seja-um-distribuidor"]}</title>

        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <FormClients />
    </Layout>
  );
}
