import {
  About1Icon,
  About2Icon,
  About3Icon,
  About4Icon,
  CarIcon,
  EmailIcon,
  FacebookIcon,
  HandsIcon,
  InstagramIcon,
  Monitor2Icon,
  MonitorIcon,
  PhoneIcon,
  PinIcon,
  WhattsAppIcon,
} from 'components/icons';
import { WhattsAppInvIcon } from 'components/icons/Whattsapp';
import {
  apiWhattsApp,
  emailLink,
  facebookLink,
  googleMapsLink,
  instagramLink,
} from 'src/services/social-links';

export const activitiesHomeData = [
  {
    icon: <CarIcon />,
    title: 'conteúdo sobre automobilismo',
    text: 'Aqui na CMBBrasil gostamos de produzir um conteúdo de qualidade sobre carros e motos que vai fazer você ficar por dentro do mundo automotivo.',
  },
  {
    icon: <MonitorIcon />,
    title: 'Sorteios de prêmios incríveis',
    text: 'Realizamos sorteios de prêmios incríveis, como carros e motos. E pode acreditar, é tudo feito com muita transparência e confiabilidade.',
  },
  {
    icon: <Monitor2Icon />,
    title: 'conteúdo sobre automobilismo',
    text: 'Temos uma variedade de eBooks exclusivos que contam a história da indústria automotiva. Tem muita curiosidade e fotos exclusivas pra você curtir!',
  },
  {
    icon: <HandsIcon />,
    title: 'conteúdo sobre automobilismo',
    text: 'Nos dedicamos em ajudar a comunidade por meio de ações sociais e beneficentes. Eu fico super feliz em poder fazer parte disso!',
  },
];

export const activitiesAboutData = [
  {
    icon: <About1Icon />,
    title: 'Qualidade dos produtos e serviços oferecidos',
  },
  {
    icon: <About2Icon />,
    title: 'Transparência e confiabilidade nos sorteios',
  },
  {
    icon: <About3Icon />,
    title: 'Compromisso social, por meio do Instituto Paulo Freitas',
  },
  {
    icon: <About4Icon />,
    title: 'Equipe altamente capacitada e dedicada',
  },
];

export const contactList = [
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    adress: '@papelparamechas',
    url: instagramLink,
  },
  {
    icon: <FacebookIcon />,
    title: 'Facebook',
    adress: '@papelparamechas',
    url: facebookLink,
  },
  {
    icon: <EmailIcon />,
    title: 'e-mail',
    adress: 'sac@papelparamechas.com.br',
    url: emailLink,
  },
];
