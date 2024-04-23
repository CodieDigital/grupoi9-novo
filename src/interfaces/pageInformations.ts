export interface IPageInformations {
  head: {
    pageTitle: string;
    metaDescription: string;
    imageOpenGraph: string;
    headScripts: string;
  };
  body: { bodyScripts: string };
  subtitulo: string;
  banner: IBanners;
  numeros: string;
  tituloCampanha: string;
  nossasCampanhas: ICardsList[];
  textoSessaoVideo: string;
  sustentabilidade: string;
  blogs: ICardsList[];
  compromisso: string;
  visao: string;
  etica: string;
  campanhas: string;
  i9Blog: string;
  conheca: string;
  descricao: string;
  tituloSessaoVideo: string;
  subtituloBanner: string;
  tituloProduto: string;
  subtituloProduto: string;
  produto: string;
  produtoSubtitulo: string;
  produtoNome: string;
  produtoBotao: string;
  tituloBanner: string;
  referencia: string;
  expertise: string;
  papeisProduzidos: string;
  colaboradoresContratados: string;
  clientesSatisfeitos: string;
  parceirosDistribuidores: string;
  imagem: string;
  produtoImagem: string;
  tecnologia: string;
  industria: string;
  producao: string;
  imagemSessao2: string;

  tituloSessao1: string;
  textoSessao1: string;

  imagem1: string;
  imagem2: string;

  tituloBox1: string;
  subtituloBox1: string;
  textoBox1: string;

  tituloBox2: string;
  subtituloBox2: string;
  textoBox2: string;

  tituloBox3: string;
  subtituloBox3: string;
  textoBox3: string;

  botaoSessaoVideo: string;
  link: string;
  tituloSessao2: string;
  textoSessao2: string;
  extra2: string;
  extra3: string;
  extra4: string;
  titulo2Sessao2: string;
  titulo1Sessao2: string;
  texto1Sessao2: string;
  texto2Sessao2: string;
  titulo1Sessao3: string;
  texto1Sessao3: string;
  titulo2Sessao3: string;
  texto2Sessao3: string;
  imagens: IIMagens[];
  produtos: IProducts[];
  lancamentos: ILaunchs[];
}

export interface ILaunchs {
  subCategoriaId: number;
  titulo: string;
  descricao: string;
  imagem: string;
  id: number;
  ativo: boolean;
  ordem: number;
  dataCriacao: string;
  dataEdicao: string;
}

export interface IProducts {
  titulo: string;
  descricao: string;
  imagem: string;
  id: number;
  ativo: boolean;
  dataCriacao: string;
  dataEdicao: string;
}

export interface ICardsList {
  titulo: string;
  descricao: string;
  imagem: string;
  pageTitle: string;
  metaDescription: string;
  url: string;
  id: number;
  ativo: boolean;
  dataCriacao: string;
  dataEdicao: string;

  subtitulo: string;

  categoriaTitle: string;
  categoriaId: number;
}

export interface IBanners {
  titulo: string;
  subtitulo: string;
  video: string;
  descricao: string;
  imagem: string;
  url: string;
  id: number;
  thumbnail: string;
  ativo: boolean;
  dataCriacao: string;
  dataEdicao: string;
}

export interface IServices {
  titulo: string;
  subtitulo: string;
  url: string;
  id: number;
}

export interface IDepoiments {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  id: number;
}

export interface IFaqs {
  titulo: string;
  descricao: string;
  url?: string;
  id: number;
}

export interface ISobre {
  titulo: string;
  descricao: string;
  imagem: string;
  url: string;
  id: number;
  ativo: boolean;
  dataCriacao: string;
  dataEdicao: string;
}

export interface IInstitutoGaleria {
  id: number;
  titulo: string;
  descricao: string;
  url: string;
  imagens: IGaleriaInstituto[];
}

export interface IGaleriaInstituto {
  fileType: string;
  fileSize: string;
  fileData: string;
  guid: string;
  slug: string;
  placeReceived: string;
  tableId: number;
  tableAction: string;
  id: number;
  ativo: boolean;
  excluido: boolean;
  dataCriacao: string;
  dataEdicao: string;
}

export interface IBlogDetail {
  id: number;
  titulo: string;
  subtitulo: string;
  categoriaBlogId: number;
  thumbnail: string;
  imagem: string;
  url: string;
  descricao: string;
  dataCadastro: string;
  dataCriacao: string;
}

export interface IIMagens {
  fileType: string;
  fileSize: string;
  fileData: string;
  guid: string;
  slug: string;
  placeReceived: string;
  tableId: number;
  tableAction: string;
  id: number;
  ativo: boolean;
  excluido: boolean;
  dataCriacao: string;
  dataEdicao: string;
}
