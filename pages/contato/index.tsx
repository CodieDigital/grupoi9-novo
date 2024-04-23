import Head from "next/head";

import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";
import { Contact } from "components/sections/contato/index";

export default function ContactPage() {
  const { translate } = useI18n();

  return (
    <Layout noBg>
      <Head>
        <title>{translate.dictionary["contato"]}</title>
      </Head>

      <Contact $isPage={true} />
    </Layout>
  );
}
