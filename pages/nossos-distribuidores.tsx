import Head from "next/head";
import { useRouter } from "next/router";
import { useHeader } from "codiedigital";
import { GetServerSideProps } from "next";

import { useI18n } from "src/contexts/i18n";
import { getShopData } from "src/api-requisitions/shops";
import { checkLanguage } from "src/utils/checkLanguage";
import { getInternationalShopsData } from "src/api-requisitions/international-shops";

import { Layout } from "components/layout";
import { ShopsList, MapClients } from "components/sections/distributors";

import { IShops } from "src/interfaces/shops";

import * as S from "styles/pages/nossos-distribuidores";

export default function Distributors({
  shopList,
  internationalShopList,
}: {
  shopList: IShops;
  internationalShopList?: any;
}) {
  const { translate, locale } = useI18n();

  const router = useRouter();
  const { headerHeight } = useHeader();

  return (
    <Layout noBg>
      <Head>
        <title>{translate.dictionary["nossos-distribuidores"]}</title>

        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.NossosDistribuidores style={{ marginTop: headerHeight }}>
        {locale === "pt" ? (
          <>
            <MapClients shopList={shopList.items} />

            <ShopsList
              title="Nossos Distribuidores Internacionais"
              data={internationalShopList.items}
            />
          </>
        ) : (
          <ShopsList data={shopList.items} />
        )}
      </S.NossosDistribuidores>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const language = checkLanguage(ctx.query.lang as string);

  const response =
    language.lang === "pt"
      ? await getShopData("GetAll")
      : await getInternationalShopsData(language.id);

  return {
    props: {
      shopList: response?.shopData || {},
      internationalShopList: response?.internationalShopData || {},
    },
  };
};
