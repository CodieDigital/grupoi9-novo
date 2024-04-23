import { Error, Container } from "codiedigital";

import * as S from "./styles";

interface ITitleText {
  title?: string;
  text: string;
  type?: "text";
}

export function TitleText({ type, text, title }: ITitleText) {
  return (
    <Error name="TitleText">
      <S.TitleText $type={type}>
        <Container>
          {title && (
            <h2
              className="-avianoFlare-medium uppercase title"
              dangerouslySetInnerHTML={{ __html: title }}
              data-aos="fade-up"
              data-aos-duration="1500"
            ></h2>
          )}

          <div
            className="paragraph-2 text"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
            data-aos="fade-up"
            data-aos-duration="1500"
          ></div>
        </Container>
      </S.TitleText>
    </Error>
  );
}
