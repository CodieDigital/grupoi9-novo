import { Container } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { contactList } from "src/localData/data";

import { FormContact } from "./form-contact";

import * as S from "./styles";

interface IContact {
  $isPage?: boolean;
}

export function Contact({ $isPage }: IContact) {
  const { translate } = useI18n();

  return (
    <S.Contact $isPage={$isPage}>
      <Container>
        <div className="left">
          <div className="box-title">
            <h2 className="title-2-bold">
              {translate.dictionary["entre-em-contato"]}
            </h2>

            <p className="paragraph-2 subtitle">
              {
                translate.dictionary[
                  "preencha-o-formulario-ao-lado-e-entraremos-em-contato-com-voce-ou-entre-em-contato-conosco-pelas-informacoes-abaixo"
                ]
              }
            </p>
          </div>

          <div className="contacts-box">
            {contactList.map((contact) => (
              <a
                key={"contact-link" + contact.title}
                href={contact.url}
                target="_blank"
              >
                {contact.icon}

                <div className="info">
                  <h3 className="link-1 uppercase">{contact.title}</h3>
                  <p className="link-1">{contact.adress}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="right">
          <FormContact />
        </div>
      </Container>
    </S.Contact>
  );
}
