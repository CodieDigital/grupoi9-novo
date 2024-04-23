import { Input, InputFile, api, useSocialLinks } from "codiedigital";
import { Layout } from "components/layout";
import { FormHandler } from "src/utils/form-handler";

export default function HomePage(props) {
  const { telefone } = useSocialLinks();

  props.data

  return (
    <Layout>

      {props.data?.banner && <Banner banner={props.data.banner} />}

  
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const response = await api.get("home");

  return {
    props: {
      data: response.data,
    },
  };
};
