import { countrys } from "./locales-translate";

interface ITranslate {
  languageName: string;
  dictionary: {
    "mapa-do-site": string;
    home: string;
    "sobre-nos": string;
    "a-industria": string;
    portfolio: string;
    comunidade: string;
    distribuidores: string;
    "nossos-distribuidores": string;
    "seja-um-distribuidor": string;
    contato: string;
    loja: string;
    "politicas-de-privacidade": string;

    //home
    "desculpe-houve-um-problema-com-essa-campanha-estamos-trabalhando-para-corrigir": string;
    "papeis-para-mechas-ja-fabricados": string;
    "quero-comprar": string;
    "saiba-como": string;

    "nossas-campanhas": string;
    "fique-por-dentro": string;
    "nosso-compromisso": string;
    "ver-todos-os-posts": string;

    //sobre
    assista: string;
    "papeis-produzidos": string;
    "clientes-satisfeitos": string;

    //industria
    "nao-contem-metal": string;
    "facil-aplicacao": string;
    "100-reciclavel": string;
    "compativel-com-produto-quimico-utilizado-na-descoloracao": string;
    "fabricado-a-partir-de-recursos-sustentaveis": string;
    "cor-uniforme-da-raiz-as-pontas": string;
    "otimiza-tempo-no-processo-de-descoloracao": string;
    "produto-reutilizavel": string;
    "melhor-aderencia-e-maior-isolamento": string;
    "protege-a-integridade-dos-fios": string;
    "folhas-ja-cortadas-nao-enroscam": string;
    "janela-de-visibilidade": string;
    "economia-de-po-descolorante": string;
    producao: string;
    industria: string;

    //portfolio
    "nossos-produtos": string;
    lancamento: string;
    "acessar-loja": string;

    //comunidade
    filtros: string;
    "cadastre-se-para-receber-lancamentos-e-noticias": string;
    cadastrar: string;
    destaques: string;

    //nossos distribuidores
    "encontre-um-distribuidor": string;
    "localize-o-distribuidor-mais-proximo-de-voce-no-mapa-abaixo": string;
    distribuidor: string;
    pais: string;
    "nenhum-distribuidor-encontrado": string;

    //seja um distribuidor
    "conheca-mais-sobre-os-nossos-produtos-e-se-torne-um-distribuidor-preencha-o-formulario-abaixo-que-entraremos-em-contato-o-mais-breve-possivel": string;
    "nome-completo": string;
    "digite-seu-nome-aqui": string;
    "por-favor-insira-seu-nome": string;
    cep: string;
    "digite-seu-cep-aqui": string;
    "favor-inserir-um-cep-valido": string;
    "por-favor-insira-seu-cep": string;
    cidade: string;
    "digite-sua-cidade-aqui": string;
    estado: string;
    endereco: string;
    "digite-seu-endereco-aqui": string;
    bairro: string;
    "digite-seu-bairro-aqui": string;
    numero: string;
    "digite-seu-logradouro-aqui": string;
    "por-favor-insira-o-numero-do-seu-endereco": string;
    email: string;
    "digite-seu-email-aqui": string;
    "email-invalido": string;
    "por-favor-insira-seu-email": string;
    telefone: string;
    "favor-inserir-um-numero-valido": string;
    "por-favor-insira-seu-telefone": string;
    "ddd-9-99999999": string;
    mensagem: string;
    "digite-sua-mensagem-aqui": string;
    "por-favor-escreva-sua-mensagem": string;

    //Contato

    nome: string;
    "entre-em-contato": string;
    "preencha-o-formulario-ao-lado-e-entraremos-em-contato-com-voce-ou-entre-em-contato-conosco-pelas-informacoes-abaixo": string;

    //Footer
    "digite-seu-email": string;
    enviar: string;
    newsletter: string;
    "newsletter-enviada-com-sucesso": string;
    "erro-ao-enviar": string;

    //
    "pagina-nao-encontrada": string;
    "houve-um-problema-no-carregamento-da-pagina": string;
    "clique-no-botao-abaixo-ou-tente-recarregar-a-pagina": string;
    recarregar: string;
    sucesso: string;
    obrigado: string;
    "pelo-contato": string;
    "contato-enviado": string;
    voltar: string;
    "desculpe-houve-um-problema-com-esse-post-estamos-trabalhando-para-corrigir": string;

    //_app.tsx
    "nosso-site-armazena-cookies-e-pode-realizar-a-coleta-de-dados-pessoais-para-auxiliar-e-personalizar-sua-experiencia-de-navegacao-ao-utilizar-nossos-servicos-voce-declara-estar-ciente-destas-condicoes-e-podera-ter-acesso-a-mais-detalhes-em-nossa": string;
    "politica-de-privacidade": string;
  };
}

export interface IFormatterTranslateResponse {
  value: string;
  symbol?: string;
}

interface I18nContextType {
  locale: keyof typeof countrys;
  translate: ITranslate;
  formatterTranslate(value: string): IFormatterTranslateResponse;
}

export type { I18nContextType, ITranslate };
