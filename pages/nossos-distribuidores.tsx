import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { useI18n } from "src/contexts/i18n";
import { checkLanguage } from "src/utils/checkLanguage";
import { getShopData } from "src/api-requisitions/shops";
import { getInternationalShopsData } from "src/api-requisitions/international-shops";

import { Layout } from "components/layout";
import { ShopsList, MapClients } from "components/sections/distributors";

import { IShops } from "src/interfaces/shops";

export default function Distributors({ shopList }: { shopList: IShops }) {
  const { translate, locale } = useI18n();
  const router = useRouter();

  return (
    <Layout noBg>
      <Head>
        <title>{translate.dictionary["nossos-distribuidores"]}</title>

        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      {locale === "pt" ? (
        <MapClients shopList={shopList.items} />
      ) : (
        <ShopsList data={shopList.items} />
      )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const language = checkLanguage(ctx.query.lang as string);

  const { shopData } =
    language.lang !== "pt"
      ? await getInternationalShopsData(language.id)
      : await getShopData("GetAll");

  return {
    props: {
      shopList: shopData,
    },
  };
};
