import Document, { Html, Head, Main, NextScript } from 'next/document';

import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
  
    static async getInitialProps(ctx : any) {

        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App:any) => (props:any) =>
                sheet.collectStyles(<App {...props} />),
            })
    
          const initialProps = await Document.getInitialProps(ctx);
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }

    render() {
        return (
            <Html lang="en">
                <Head>
                 <script
            dangerouslySetInnerHTML={{
              __html: `
                (function (w, d, s, o, f, js, fjs) {
                  w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                  js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                  js.id = o; js.src = f; js.async = 1;
                  fjs.parentNode.insertBefore(js, fjs);
                }(window, document, 'script', 'widget4Events', 'https://cdn.4.events/mi-widget/bundle.js'));
                widget4Events('init', {
                  client_id: '24653',
                  event_id: '1',
                  position: 'left',
                  button_text: 'GARANTA SUA VAGA',
                  language: 'pt-br',
                  image: 'https://vp2uploads.s3.amazonaws.com/24653/1/imagem_fundo_widget/7d94b781f07ad4a2cea391286ac3277e156c51b2.jpg',
                  theme: {
                    button_color: '#00b4af',
                    button_text_color: '#ffffff',
                  },
                });
              `,
            }}
          />
                </Head>

                <body >
                    <Main/>

                    <NextScript />
                </body>
            </Html>
        );
    }
}


