import { Footer } from "./footer";
import { Header } from "./header";

import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <Header />

      {children}

      <Footer />
    </S.Layout>
  );
}
