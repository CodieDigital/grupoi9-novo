import { CardContactLink } from "./card-contact-link";
import { CardCampaing } from "./card-campaing";
import { CardLaunch } from "./card-launch";
import { CardProduct } from "./card-product";

import { ICard } from "./interfaces";

export function Card({ type, data, generalProps }: ICard) {
  switch (type) {
    case "contact":
      return (
        <CardContactLink
          color={generalProps?.contactProps?.color}
          hoverColor={generalProps?.contactProps?.hoverColor}
          card={data}
        />
      );
    case "campaing":
      return (
        <CardCampaing
          data={data}
          type={generalProps?.campaingProps?.type!}
          index={generalProps?.campaingProps?.index!}
        />
      );
    case "launch":
      return <CardLaunch data={data} />;
    case "product":
      return <CardProduct data={data} />;
    default:
      throw new Error(`Invalid card type: ${type}`);
  }
}
