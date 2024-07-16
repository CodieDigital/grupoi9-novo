import { useEffect, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/router";

import { languages } from "src/contexts/i18n/data";

import { BoxFloating } from "components/data";

import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";

import * as S from "./styles";

interface LayoutProps {
  noBg?: boolean;
  children?: React.ReactNode;
}

export function Layout({ noBg, children }: LayoutProps) {
  const router = useRouter();

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linksMenu = [
    {
      id: 1,
      link: "Home",
      href: "/",
    },
    {
      id: 2,
      link: "Sobre nós",
      href: "/sobre",
    },
    {
      id: 3,
      link: "A indústria",
      href: "/industria",
    },
    {
      id: 4,
      link: "Portfólio",
      href: "/portfolio",
    },
    {
      id: 5,
      link: "Blog",
      href: "/blog",
    },
    {
      id: 6,
      link: "Distribuidores",
      categorias: [
        {
          titulo: "Nossos Distribuidores",
          subtitulo: "",
          url: "nossos-distribuidores",
          id: 1,
        },
        {
          titulo: "Seja um Distribuidor",
          subtitulo: "",
          url: "seja-um-distribuidor",
          id: 2,
        },
      ],
    },
    {
      id: 7,
      link: "Contato",
      href: "/contato",
    },
  ];

  return (
    <S.Layout>
      <HeaderComponent noBg={noBg} fixed={fixed} data={linksMenu} />

      <BoxFloating modalPosition="left">
        <>
          {languages.map(
            ({ icon: Icon, lang }) =>
              Icon && (
                <Link
                  className={`link ${
                    router.query.lang === lang ? "active" : ""
                  }`}
                  href={{
                    query: { ...router.query, lang: lang },
                  }}
                >
                  <Icon />
                </Link>
              )
          )}
        </>
      </BoxFloating>

      {children}

      <FooterComponent />
    </S.Layout>
  );
}
