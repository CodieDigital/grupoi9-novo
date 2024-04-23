import { CardContactProps } from './card-contact-link';
import {
  ILaunchs,
  IProducts,
  ICardsList,
} from 'src/interfaces/pageInformations';

interface ICardDataMap {
  launch: { type: 'launch'; data: ILaunchs };
  product: { type: 'product'; data: IProducts };
  campaing: { type: 'campaing'; data: ICardsList };
  contact: { type: 'contact'; data: CardContactProps };
}

interface GeneralProps {
  generalProps?: {
    contactProps?: {
      color?: string;
      hoverColor?: string;
    };
    campaingProps?: {
      type?: 'campaing' | 'blog';
      index?: number;
    };
  };
}

export type ICard = ICardDataMap[keyof ICardDataMap] & GeneralProps;
