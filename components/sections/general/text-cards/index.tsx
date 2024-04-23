import { Error, Container } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { Card } from "components/cards";
import { Button } from "components/data";

import { ICardsList } from "src/interfaces/pageInformations";

import * as S from "./styles";

interface ITextCards {
  data: TextCardProps;
  list: ICardsList[];
  isBlog?: boolean;
}

interface TextCardProps {
  title: string;
  id: string;
  subtitle: string;
  description: string;
}

export function TextCards({ data, list, isBlog }: ITextCards) {
  const { translate } = useI18n();

  return (
    <Error name="TextCards section">
      <S.TextCards id={data.id}>
        <Container>
          <div className="box-text">
            <div className="box-title">
              {data.subtitle && (
                <h3
                  className="paragraph-2 uppercase"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {data.subtitle}
                </h3>
              )}

              {data.title && (
                <h2
                  className={`title-3 title ${
                    data.title !== "i9Blog" ? "uppercase" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {data.title}
                </h2>
              )}
            </div>

            {data.description && (
              <div
                className="paragraph-2 text"
                dangerouslySetInnerHTML={{
                  __html: data.description,
                }}
                data-aos="fade-up"
                data-aos-duration="1500"
              ></div>
            )}

            {data.title === "i9Blog" && (
              <Button
                text={translate.dictionary["ver-todos-os-posts"]}
                href="/blog"
                className="button-all-posts link-1 hide-mobile"
              />
            )}
          </div>

          <div className="box-overflow">
            <div className="box-wrapper">
              {list.map((card, index) => (
                <Card
                  key={index}
                  type="campaing"
                  data={card}
                  generalProps={{
                    campaingProps: {
                      type: isBlog ? "blog" : "campaing",
                    },
                  }}
                />
              ))}
            </div>
          </div>

          {data.title === "Blog" && (
            <Button
              text={translate.dictionary["ver-todos-os-posts"]}
              href="/blog"
              className="button-all-posts link-1 show-mobile"
            />
          )}
        </Container>
      </S.TextCards>
    </Error>
  );
}
