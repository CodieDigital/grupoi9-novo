import { ComponentProps } from "react";

import Link from "next/link";

export interface ILinkWithQuery extends ComponentProps<typeof Link> {
  href: string;
}
