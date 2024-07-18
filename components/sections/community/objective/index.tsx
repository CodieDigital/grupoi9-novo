import { Error, Container } from "codiedigital";

import { IGenericItem } from "codiedigital";

import * as S from "./styles";

interface IObjectiveProps {
  cards: IGenericItem[];
}

export function Objective({ cards }: IObjectiveProps) {
  return (
    <Error name="Objective Section">
      <S.Objective>
        <Container>
          <ul className="card-list">
            {cards &&
              cards.length > 0 &&
              cards.map((card) => (
                <li
                  key={card.id}
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4 className="title-3-avianoFlare-medium uppercase">
                    {card.titulo}
                  </h4>
                  <p className="paragraph-2 ">{card.descricao}</p>
                </li>
              ))}
          </ul>
        </Container>
      </S.Objective>
    </Error>
  );
}
