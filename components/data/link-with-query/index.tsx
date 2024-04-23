import Link from "next/link";

import { useRouter } from "next/router";

import { ILinkWithQuery } from "./interfaces";

export function LinkWithQuery({ href, children, ...rest }: ILinkWithQuery) {
  const internalLinks = [""];
  const router = useRouter();

  return (
    <Link
      {...rest}
      href={
        internalLinks.includes(href)
          ? href
          : {
              pathname: href,
              query: router.query,
            }
      }
    >
      {children}
    </Link>
  );
}
