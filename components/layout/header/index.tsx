import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Icon, Container } from "codiedigital";
import { Button } from "codieweb/dist/cjs/components/data/simple-button";

import { useI18n } from "src/contexts/i18n";

import { BagIcon } from "components/icons";

import { LinkWithQuery } from "components/data";

import { MenuMobile } from "./menu-mobile";

import { ICategoriesHeader } from "src/interfaces/header";

import * as S from "./styles";

interface Categorias {
  id: number;
  sublink: string;
  href: string;
}

interface HeaderProps {
  data: ICategoriesHeader[];
  noBg?: boolean;
  fixed: boolean;
}

export function HeaderComponent({ data, noBg, fixed }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);
  const { translate, formatterTranslate } = useI18n();

  const onClick = () => setIsActive(!isActive);

  const router = useRouter();

  const newDataLinks = data.map(function (element) {
    if (Array.isArray(element.categorias)) {
      const categoriasTranslated = element.categorias.map((categoria) => {
        return {
          ...categoria,
          titulo:
            translate.dictionary[formatterTranslate(categoria.titulo).value],
        };
      });

      return {
        ...element,
        link: translate.dictionary[formatterTranslate(element.link).value],
        categorias: categoriasTranslated,
      };
    } else {
      return {
        ...element,
        link: translate.dictionary[formatterTranslate(element.link).value],
      };
    }
  });

  return (
    <S.Header $fixed={fixed} $noBg={noBg} id="header">
      <MenuMobile
        data={newDataLinks}
        menu={isActive}
        setStateMenu={setIsActive}
      />

      <Container>
        <LinkWithQuery
          href="/"
          className="logo"
          aria-label="logomarca da empresa"
        ></LinkWithQuery>

        <div className="menuContainer">
          <button
            type="button"
            aria-label="botao para navegação mobile"
            onClick={onClick}
            className="block-bar"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <nav className="menu">
            {newDataLinks.map((categoria) => {
              return categoria.categorias ? (
                <span
                  key={"link-menu-" + categoria.id}
                  className="itens link-1"
                >
                  {categoria.link}

                  <Icon name="NavDownIcon" />

                  {categoria.categorias && (
                    <div className="subMenu-bg">
                      <ul className="sub-menu">
                        {categoria.categorias.map((subCategoria) => {
                          return (
                            <li key={subCategoria.id + subCategoria.titulo}>
                              <Link
                                href={{
                                  pathname: "/[url]",
                                  query: {
                                    ...router.query,
                                    url: subCategoria.url,
                                  },
                                }}
                                className="link-1"
                              >
                                {subCategoria.titulo}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </span>
              ) : (
                <LinkWithQuery
                  key={"link-menu-" + categoria.id}
                  href={categoria.href!}
                  className={`itens link-1 ${
                    router.pathname === categoria.href ? "active" : ""
                  }`}
                >
                  {categoria.link}
                </LinkWithQuery>
              );
            })}
          </nav>

          <Button
            buttonData={{
              name: "bag show-1024",
              icon: <BagIcon />,
              text: translate.dictionary["loja"],
              url: "https://lojapapelparamechas.com.br",
              hasBg: true,
              externalLink: true,
            }}
          />

          <Button
            buttonData={{
              name: "bag show-500",
              icon: <BagIcon />,
              externalLink: true,
              url: "https://lojapapelparamechas.com.br",
              hasBg: true,
            }}
          />
        </div>

        <Button
          buttonData={{
            name: "bag hide-mobile",
            icon: <BagIcon />,
            text: translate.dictionary["loja"],
            externalLink: true,
            url: "https://lojapapelparamechas.com.br",
            hasBg: true,
          }}
        />
      </Container>
    </S.Header>
  );
}
