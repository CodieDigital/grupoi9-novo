import { useI18n } from "src/contexts/i18n";

import { Container } from "codiedigital";

import * as S from "./styles";

interface IDescriptions {
  textIndustry: string;
  textProduction: string;
}

export function Descriptions({ textIndustry, textProduction }: IDescriptions) {
  const { translate } = useI18n();

  return (
    <S.Descriptions>
      <Container>
        <div className="box-text">
          <h2
            className="title-3-avianoFlare-medium title"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {translate.dictionary["industria"]}
          </h2>
          {textIndustry && (
            <div
              className="paragraph-2 description"
              dangerouslySetInnerHTML={{
                __html: textIndustry,
              }}
              data-aos="fade-up"
              data-aos-duration="1500"
            ></div>
          )}
        </div>

        <div className="box-text">
          <h2
            className="title-3-avianoFlare-medium title"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {translate.dictionary["producao"]}
          </h2>

          {textProduction && (
            <div
              className="paragraph-2 description"
              dangerouslySetInnerHTML={{
                __html: textProduction,
              }}
              data-aos="fade-up"
              data-aos-duration="1500"
            ></div>
          )}
        </div>
      </Container>
    </S.Descriptions>
  );
}
