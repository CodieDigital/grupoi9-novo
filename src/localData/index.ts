import { apiWhattsApp, emailLink } from 'src/services/social-links';

export const textCards1 = {
  id: 'campanhas',
  title: 'um mundo melhor',
  subtitle: 'Nossas campanhas',
  description:
    'Descubra nossas campanhas e ações eco-friendly! Junte-se a nós na missão de cuidar do meio ambiente e ajudar pessoas. Conheça nossas iniciativas sustentáveis e faça parte dessa transformação positiva.',
};

export const textCards2 = {
  id: 'blog',
  title: 'i9Blog',
  subtitle: 'Fique por dentro',
  description:
    'Descubra as últimas tendências e atualizações no mundo da descoloração! Fique por dentro das inovações, dicas exclusivas e informações essenciais para alcançar resultados incríveis.',
};

export const VideoImageText1 = {
  video: '/videos/video-conheca.mp4',
  title: 'Seja bem-vindo',
  description: `O <strong>Grupo i9</strong> nasceu com o propósito de consolidar seu papel sustentável, práticas sociais, governança corporativa e compliance.<div class='line'></div> 
  Possuímos plena conscientização da <strong>influência, impacto e valor</strong> que podemos gerar por meio de nossos negócios, na sociedade e ecossistema, sendo assim, <strong>desenvolvemos soluções voltadas para o mercado da beleza,</strong> gerando segurança no procedimento e colaboração para um mundo melhor.`,
};

export const VideoImageText2 = {
  image: '/images/leafs.webp',
  title: 'Nosso compromisso',
  subtitle: 'sustentabilidade',
  description: `Nos comprometemos com a sustentabilidade de nosso país e do mundo, onde a inovação e a responsabilidade ambiental se unem garantindo respeito ao meio ambiente e ao bem-estar animal.`,
};

export const VideoImageText3 = {
  video: '/videos/conheca.mp4',
  title: 'Conheça',
  subtitle: 'Assista',
  youtubeLink:
    'https://www.youtube.com/watch?v=s7dcuFpYlfg&ab_channel=PapelparaMechas',
  description: `Buscamos constantemente aprimorar nossos conhecimentos, com o propósito de conscientizar e transformar a indústria da beleza, promovendo a inovação, a responsabilidade ambiental e o impacto positivo na sociedade.<div class='line'></div> Para assim, impulsionar uma mudança significativa na forma como a beleza é produzida, consumida e percebida, criando um futuro mais sustentável para todos.<div class='line'></div>Vamos juntos transformar a beleza de forma sustentável?`,
};

export const siteMapFooter = [
  {
    id: 1,
    adress: 'Home',
    url: '/',
  },
  {
    id: 2,
    adress: 'Sobre nós',
    url: '/sobre',
  },
  {
    id: 3,
    adress: 'Eventos',
    url: '/eventos',
  },
  {
    id: 4,
    adress: 'Contato',
    url: '/contato',
  },
];

export const supportFooter = [
  {
    adress: 'Perguntas frequentes',
    url: '#faqs',
  },
  {
    adress: 'Privacidade e Segurança',
    url: '',
  },
  {
    adress: 'Termos de Uso',
    url: '',
  },
];

export const contactFooter = [
  {
    title: 'Dúvidas, ligue',
    adress: '(43) 9 9999-9999',
    url: apiWhattsApp,
  },
  {
    title: 'Envie um e-mail',
    adress: 'contato@contato.com.br',
    url: emailLink,
  },
];

export const sobrePage = {
  titulo: 'Sobre nós',
  descricao: `A CMBBrasil tem orgulho em produzir conteúdo de qualidade sobre automobilismo para seus leitores. Com uma equipe de especialistas em comunicação, marketing, design e tecnologia, nós nos comprometemos em pesquisar, criar e publicar os mais variados conteúdos, artigos, notícias e informações do mundo automotivo para nossos leitores. <br/> <br/>
Compilamos esses materiais em eBooks que estão disponíveis em nossa loja virtual. Nossos eBooks, em sua grande maioria, contam a história da indústria automotiva do Brasil e do mundo, levando informações e curiosidades por meio de textos e fotos exclusivas. Entre eles, destacamos o lendário Ford Maverick, o bravo Land Rover Defender e o icônico Fusca, o carro mais queridinho dos brasileiros. <br/> <br/>
E tem mais! Ao comprar um dos nossos eBooks, você concorre automaticamente a um sorteio de um carro incrível! Nós acreditamos que um sorteio pode fazer a diferença na vida de alguém, por isso, nos empenhamos em realizar promoções que proporcionam a chance de realizar sonhos. <br/> <br/>
Com a CMBBrasil, você pode participar dos nossos sorteios com total confiança, sabendo que seus bilhetes serão respeitados e que o processo de escolha do vencedor será justo e transparente. Não perca a chance de adquirir nossos eBooks incríveis e ainda concorrer a um carro dos sonhos! Confie na CMBBrasil para entregar prêmios incríveis e conteúdo de qualidade sobre o mundo automotivo.`,
  imagem: '/images/sobrePage.webp',
  url: '',
  id: 1,
  ativo: true,
  dataCriacao: '',
  dataEdicao: '',
};

export const galleryIndustry1 = [
  {
    image: '/images/gallery-1.webp',
  },
  {
    image: '/images/gallery-2.webp',
  },
  {
    image: '/images/gallery-3.webp',
  },
];

export const galleryIndustry2 = [
  {
    image: '/images/map-1.webp',
  },
  {
    image: '/images/map-2.webp',
  },
  {
    image: '/images/map-3.webp',
  },
];
