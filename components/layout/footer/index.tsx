import Link from "next/link";

import { Icon, Error, Container, NextImage } from "codiedigital";
import { BoxSocials } from "codieweb/dist/cjs/components/data/box-socials";

import { useI18n } from "src/contexts/i18n";

import { Card } from "components/cards";
import { NewsLetter, LinkWithQuery } from "components/data";

import {
  emailLink,
  tikTokLink,
  youtubeLink,
  facebookLink,
  linkedinLink,
  instagramLink,
} from "src/services/social-links";

import * as S from "./styles";

export function FooterComponent() {
  const { locale, translate } = useI18n();

  return (
    <Error name="footer">
      <S.Footer>
        <Container>
          <NewsLetter />

          <LinkWithQuery
            className="logo"
            href="/"
            aria-label="logomarca da empresa"
          >
            <NextImage src="/images/logo-new-2.webp" />
          </LinkWithQuery>

          <ul className="box-links">
            <li>
              <Card
                type="contact"
                data={{ url: "/", adress: translate.dictionary["home"] }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: "/sobre",
                  adress: translate.dictionary["sobre-nos"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: "/industria",
                  adress: translate.dictionary["a-industria"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: "/blog",
                  adress: translate.dictionary["blog"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: "/portfolio",
                  adress: translate.dictionary["portfolio"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: "/nossos-distribuidores",
                  adress: translate.dictionary["nossos-distribuidores"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: "/seja-um-distribuidor",
                  adress: translate.dictionary["seja-um-distribuidor"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            <li>
              <Card
                type="contact"
                data={{
                  url: "/contato",
                  adress: translate.dictionary["contato"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>

            {locale === "pt" && (
              <li>
                <Card
                  type="contact"
                  data={{
                    url: "https://lojapapelparamechas.com.br",
                    adress: translate.dictionary["loja"],
                  }}
                  generalProps={{
                    contactProps: {
                      color: "#fff",
                      hoverColor: "var(--bt-linear-gradient-1)",
                    },
                  }}
                />
              </li>
            )}

            <li>
              <Card
                type="contact"
                data={{
                  url: "/politicas-de-privacidade",
                  adress: translate.dictionary["politicas-de-privacidade"],
                }}
                generalProps={{
                  contactProps: {
                    color: "#fff",
                    hoverColor: "var(--bt-linear-gradient-1)",
                  },
                }}
              />
            </li>
          </ul>

          <BoxSocials
            srcLinks={{
              email: emailLink,
              youtube: youtubeLink,
              facebook: facebookLink,
              instagram: instagramLink,
              linkedin: linkedinLink,
              tiktok: tikTokLink,
            }}
            boxStyles={{
              svgWidth: "20px",
              svgColor: "#fff",
              svgHoverColor: "var(--bt-linear-gradient-1)",
            }}
          />
        </Container>

        <Link href="https://codie.digital/" className="codie-logo">
          <Icon name="CodieIcon" />
        </Link>
      </S.Footer>
    </Error>
  );
}
