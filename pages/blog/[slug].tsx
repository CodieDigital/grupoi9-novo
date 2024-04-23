import { HeadComponent, BlogContent, getBlog } from "codiedigital/dist";

export default function BlogPage({ blogList }) {
  return (
    <>
      <HeadComponent
        headContent={{
          pageTitle: "Blog e noticias",
          metaDescription: "Descricao",
        }}
      />

      <BlogContent
        blogList={blogList}
        hasNewsletter
        title="Blog"
        newsLetterHasPhone
      />
    </>
  );
}

export const getServerSideProps = async (ctx) => await getBlog(ctx);
