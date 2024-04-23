//As importações dos arquivos deve seguir a seguinte ordem:

React

Next.js

Importações de libs

importações da src

importações de componentes da aplicação

interfaces/types

styles

//As importações devem seguir o seguinte padrão: Sempre da menor importação para a menor na ordem dos que estão sendo importados exemplo:
import Link from "next/link";
import { useRouter } from "next/router";

import { toMoney } from "src/utils";
import { useConfigEcommerce } from "src/context/ecommerce-configs";

import { CardProps } from "../version-01";
import { Error, NextImage } from "components/data";
import { AddToFavorite } from "./components/add-to-favorite";

import { ICardProps } from "./interfaces"

import * as S from "./styles";

//Os estilos devem ser feitos em um arquivo dentro da mesma pasta do componente e deve ser chamar "styles.ts" exemplo:
import styled from "styled-components"

Na hora de fazer a renderização do styled é importante não ser assim: styled.div e ser assim > styled("div") para evitar erros no deploy

export const MyComponent = styled("div")`

`

após instanciado a variavel do styled-componentes na styled.ts é importante chamar assim no componente:

import * as S from "./styles"

e fazer um wrapper em volta do que deseja estilizar

É PROIBIDO ter mais de um style por componente

const Title = styled("h3")`` - X

const Row = styled("div")`` - X

const MyComponent = styled("div")`

    h3 {
        ...
    }

    .row {
        ...
    }

` - CORRETO

//Componentes devem ser sempre no formato de function e não const exemplo:

function MyComponent() {

}

//exemplo de uma organização completa padrão de um componente:

import { IMyComponentProps } from "./interfaces"

import * as S from "./styles"

export function MyComponent({}: IMyComponentProps) {

    return <S.MyComponent>...</S.MyComponent>
}

FONTS:
Nossa biblioteca possui diversos recursos um deles é ja ter as fonts dos projetos geradas automaticamente:
Voce precisa apenas acessar a pasta src/init-project/fonts.ts e escolher as familias que podem ser usadas e qual é a principal que será colocada no body e propagada para todos os elementos.

EXEMPLO:
import {IDynamicFontsProps} from "codiedigital";

export const fontsConfiguration: Omit<IDynamicFontsProps, "children"> = {
fontNames: ["barlow", "arima"], < Aqui você precisa declarar que deseja a barlow e alguma outra font de acordo com o projeto.
main: "barlow" A barlow neste caso será a principal do site. E todos os elentos vão ter ela como font-family
};

Caso tenha mais de uma font basta apenas ir no elemento desejado e:

o css vai identificar que existe "arima" escrito na classe e automaticamente irá colocar font-family desejada nela

<p className="font-16-arima"> </p>

Importante destacar que já temos os tamanhos de fonts feitas na biblioteca isso pode ser conferido dentro da node-modules/codiedigital/dist/fonts.css

!!AS FONTS ESTAREM PRÉ SETADAS NÃO SIGNIFICA NÃO PRECISAR FAZER AJUSTES PONTUAIS NO RESPONSIVO.

Ou seja deve ser ver se a font está se adequando bem de acordo com o layout proposto e se necessário fazer o responsivo da seção na mão mesmo sem pegar a font generica provinda da lib. A lib é apenas um facilitador.

Mais informações e dúvidas conferir: node-modules/codiedigital/dist/fonts.css

1.Para inicialização das fonts em seu projeto é necessário ao baixar com npm install <Proibido uso de yarn> rodar um npm run compile irá dar 2 erros mas não é nada de mais.
2.Logo após rodar um npm run build
3.E agora será possível rodar o projeto com as fonts pré selecionadas.

Sugestão para desenvolvimento do projeto:

1.[] - Configurar a init-project dentro da "src/init-project"
1.1[] - Configurar fonts
1.2[] - Configurar input-css
1.3[] - Configurar theme

2.Configurar .env colocando as variavéis:
apiURL=linkdaapi
painelURL=painelurl - Opcional

3.[] Conferir informações vindas do back na \_app é possível dar um log em props e vai ter o retorno das configurações do back.
3.1[] Conferir redes sociais  
 3.2[] Conferir google recaptcha (não pode ser o mesmo por cliente questionar a criação de um próprio e único para cada cliente)
3.3[] Conferir se há necessidade das outras configurações como: +18, cookies e etc. (está na typagem as possibilidades na função que é chamada na \_app)>
App.getInitialProps = async () => {
return GetInitialConfigsSite({ theme });
};

4.[] Se o site tiver blog já temos pronto na pasta blog caso não tenha apenas excluir a pasta

5.[]- Fazer a estrutura das pastas e componentes e arquivos.
5.1 [] - Fazer estrutura Html
5.2 [] - Fazer CSS
5.3 [] - Responsivo
5.4 [] - Integrar com as apis.
5.6 [] - Validar telefone e desktop.
5.7 [] - Avisar gestor sobre o término do projeto.

Ordem das importações

> React > Next.js > Libs > Src > Componentes > interfaces > styles


--Story BOOK: https://codiedigital-library.vercel.app/?path=/story/components-generics-accordion--default


-Use o https://figpea.com/ para colocar o arquivo .xd enviado por nós e começar a trabalhar o seu dessign, caso queira usar pelo figma mesmo apenas baixe a extenção que eles oferecem para transformar o .xd em figma usando o CONVERTIFY - plugin


import { Input, InputFile, api, useSocialLinks } from "codiedigital";
import { Layout } from "components/layout";
import { FormHandler } from "src/utils/form-handler";

export default function HomePage(props) {
  const { telefone } = useSocialLinks();

  props.data

  return (
    <Layout>

      {props.data?.banner && <Banner banner={props.data.banner} />}
      
      <FormHandler
        button={{ text: "ENVIAR" }}
        onSucess={async (data) => {
          await api.post("/form", data);
        }}
        defaultSchemas={{ name: true }}
        formData
        sucessMensage="Formulário enviado com sucesso."
      >
        <Input name="name" type="text" />

        <Input name="name_mother" type="text" />

        <InputFile name="arquivos" accept="" mask={""} />
      </FormHandler>
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
