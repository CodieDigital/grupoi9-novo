import { GetServerSideProps } from "next";

import { HeadComponent } from "codieweb/dist/cjs/components/data/head";
import { Button } from "codieweb/dist/cjs/components/data/simple-button";

import { painelURL, pathsApi } from "src/services/api";
import { useI18n } from "src/contexts/i18n";

import { Layout } from "components/layout";
import { checkLanguage } from "src/utils/checkLanguage";
import { getProductsData } from "src/api-requisitions/products";
import {
  Banner,
  Launch,
  VideoText,
  ProductsList,
} from "components/sections/products";

import { VideoImageText } from "components/sections/general";

import { IPageInformations } from "src/interfaces/pageInformations";

export default function ProductsPage({
  pageContent,
}: {
  pageContent: IPageInformations;
}) {
  const { translate, locale } = useI18n();

  const videoTextData =
    locale === "gr"
      ? {
          title:
            "Είμαστε ΗΓΕΤΕΣ με το Papel para mechas στην αγορά της καινοτόμου και Βιώσιμης Ομορφιάς!",
          text: "Η Βιώσιμη λύση μας για το ξάνοιγμα των μαλλιών γεννήθηκε για να αυξήσουμε την ευαισθητοποίηση και να εξελίξουμε μια νοοτροπία και μια συμπεριφορά, με την άμεση συμμετοχή των επαγγελματιών ομορφιάς και των πελατών τους στην προστασία του περιβάλλοντος.<br/>Είμαστε ισχυροί σύμμαχοι των κομμωτών, παρέχοντας τους αποτελεσματικότητα, αξιοπιστία, καθώς εκτιμάμε πολύ τις τεχνικές τους και όλα αυτά για να ευχαριστήσουμε μαζί, τους πελάτες σας.<br/>Στόχος μας είναι να εξυψώσουμε την άρτια τεχνική που διακατέχεστε στη δουλειά σας.<br/>Εσείς είστε, οι Beauty Artists, στο απόγειο του μοναδικού στυλ σας!<br/>Οπότε, καινοτομήστε και αναδείξτε τα αριστουργήματα σας μαζί μας!",
        }
      : {
          title: pageContent && pageContent.subtitulo,
          text: pageContent && pageContent.descricao,
        };

  return (
    <Layout>
      {pageContent && pageContent.head && (
        <HeadComponent painel={painelURL} headContent={pageContent.head} />
      )}

      {pageContent && pageContent.imagens && pageContent.imagens.length > 0 && (
        <Banner banners={pageContent.imagens} />
      )}

      {pageContent && <VideoText data={videoTextData} />}

      <VideoImageText
        noMask
        data={{ video: "/videos/video-produtos-new.mp4" }}
      />

      {pageContent &&
        pageContent.produtos &&
        pageContent.produtos.length > 0 && (
          <ProductsList productList={pageContent.produtos} />
        )}

      {pageContent &&
        pageContent.lancamentos &&
        pageContent.lancamentos.length > 0 && (
          <Launch launchList={pageContent.lancamentos} />
        )}

      <Button
        buttonData={{
          url: "https://lojapapelparamechas.com.br/",
          text: translate.dictionary["acessar-loja"],
          hasBg: true,
          name: "loja",
          externalLink: true,
        }}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=3600"
  );

  const { productsData } = await getProductsData();

  return {
    props: {
      pageContent: productsData[checkLanguage(ctx.query.lang as string).lang],
    },
  };
};

// sobe att
