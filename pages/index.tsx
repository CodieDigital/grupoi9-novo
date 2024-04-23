import { Layout } from "components/layout";

export default function HomePage(props) {
  props.data;

  return <Layout></Layout>;
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: response.data,
    },
  };
};
