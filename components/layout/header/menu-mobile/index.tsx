import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Icon } from "codiedigital";
import { Button, BoxSocials } from "codieweb/dist/cjs/components/data";

import { useI18n } from "src/contexts/i18n";
import {
  emailLink,
  tikTokLink,
  facebookLink,
  apiWhattsApp,
  instagramLink,
  googleMapsLink,
} from "src/services/social-links";

import { LinkWithQuery } from "components/data";
import { BagIcon } from "components/icons";

import { MenuMobileProps } from "./interfaces";

import * as S from "./styles";

export function MenuMobile({
  menu,
  data,
  defaultFonts,
  setStateMenu,
}: MenuMobileProps) {
  const { translate, locale } = useI18n();
  const [dropdown, setDropdown] = useState("");
  const router = useRouter();
  const urlPage = router.query.url;

  function handleDropDown(e: string) {
    if (e !== dropdown) {
      setDropdown(e);
    } else setDropdown("");
  }

  return (
    <S.Menu className={`menuMobile ${menu ? "active" : ""}`}>
      <div className="filter" onClick={() => setStateMenu(false)}></div>

      <div className="menu-mobile">
        <div className="close " onClick={() => setStateMenu(false)}>
          <h3 className="title-3">{translate.dictionary["mapa-do-site"]}</h3>
          <Icon name="CloseIcon" />
        </div>

        <nav>
          {data.map((categoria, index) =>
            categoria.categorias ? (
              <span
                key={"link-menu-" + categoria.id + index}
                className={`dropdown ${
                  categoria.link === dropdown ? "active" : ""
                } ${defaultFonts?.link ? defaultFonts.link : "font-16"} ${
                  defaultFonts?.isUppercase ? "uppercase" : ""
                }`}
                onClick={() => handleDropDown(categoria.link)}
              >
                <div className="title">
                  {categoria.link}
                  <Icon name="NavRightIcon" />
                </div>

                {categoria.categorias && (
                  <div className="subMenu-bg">
                    {categoria.categorias?.map((subCategoria) => (
                      <Link
                        key={subCategoria.id + subCategoria.titulo}
                        href={
                          categoria.pathname
                            ? {
                                pathname: `/${categoria.pathname}/[url]`,
                                query: {
                                  ...router.query,
                                  url: subCategoria.url,
                                },
                              }
                            : {
                                pathname: subCategoria.url,
                                query: router.query,
                              }
                        }
                        className={`sub-link ${
                          defaultFonts?.link ? defaultFonts.link : "font-16"
                        } ${defaultFonts?.isUppercase ? "uppercase" : ""} ${
                          urlPage === subCategoria.url ? "active" : ""
                        }`}
                        onClick={() => setStateMenu(false)}
                      >
                        {subCategoria.titulo}
                      </Link>
                    ))}
                  </div>
                )}
              </span>
            ) : (
              <LinkWithQuery
                key={"link-menu-" + categoria.id}
                href={categoria.href!}
                className={`link ${
                  defaultFonts?.link ? defaultFonts.link : "font-16"
                } ${defaultFonts?.isUppercase ? "uppercase" : ""} ${
                  router.pathname === categoria.href ? "active" : ""
                }`}
                onClick={() => setStateMenu(false)}
              >
                {categoria.link}
              </LinkWithQuery>
            )
          )}

          {locale === "pt" && (
            <Button
              buttonData={{
                name: "bag",
                text: translate.dictionary["loja"],
                icon: <BagIcon />,
                externalLink: true,
                url: "https://lojapapelparamechas.com.br",
                hasBg: true,
              }}
            />
          )}

          <div className="border"></div>

          <h3 className="title-3 contact">{translate.dictionary["contato"]}</h3>

          <BoxSocials
            srcLinks={{
              email: emailLink,
              whattsapp: apiWhattsApp,
              facebook: facebookLink,
              instagram: instagramLink,
              maps: googleMapsLink,
              tiktok: tikTokLink,
            }}
            boxStyles={{ svgColor: "var(--primary-color)" }}
          />
        </nav>
      </div>
    </S.Menu>
  );
}
