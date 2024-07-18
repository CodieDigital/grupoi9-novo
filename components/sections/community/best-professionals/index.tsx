import { Error, Container, IGenericItem, NextImage } from "codiedigital";

import * as S from "./styles";

interface IBestProfessionalsProps {
  title: string;
  //cards: IGenericItem[];
  cards: number[];
}

export function BestProfessionals({ cards, title }: IBestProfessionalsProps) {
  return (
    <Error name="BestProfessionals">
      <S.BestProfessionals>
        <Container>
          <h2 className="title-2-medium title uppercase">{title}</h2>

          <ul className="card-list">
            {cards.map((card) => (
              <li key={card} className="card">
                <div className="image">
                  <NextImage src={"/images/community/person.png"} />
                </div>

                <div className="box-text">
                  <h6 className="paragraph-1 uppercase">Marcela Ribeiro</h6>
                  <span className="paragraph-2">Embaixadora</span>
                  <p className="paragraph-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </S.BestProfessionals>
    </Error>
  );
}
