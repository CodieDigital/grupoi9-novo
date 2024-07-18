import Link from "next/link";

import { Error, Container, NextImage } from "codiedigital";

import * as S from "./styles";

interface IDownloadEbookProps {}

export function DownloadEbook({}: IDownloadEbookProps) {
  return (
    <Error name="DownloadEbook">
      <S.DownloadEbook>
        <Container>
          <div className="content">
            <div className="image">
              <NextImage src={"/images/community/icon-ebook.png"} />
            </div>

            <h3 className="title-3-medium uppercase">baixe o nosso e-book</h3>

            <Link
              download={""}
              className="paragraph-2"
              href="javascript:void(0)"
            >
              Baixe aqui
            </Link>
          </div>
        </Container>
      </S.DownloadEbook>
    </Error>
  );
}
