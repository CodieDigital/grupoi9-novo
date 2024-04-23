import { Error, Container } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { Card } from "components/cards";

import { ILaunchs } from "src/interfaces/pageInformations";

import * as S from "./styles";

export function Launch({ launchList }: { launchList: ILaunchs[] }) {
  const { translate } = useI18n();

  return (
    <Error name="launch section">
      <S.Launch>
        <h2 className="title-1-avianoFlare uppercase title">
          {translate.dictionary["lancamento"]}
        </h2>

        <Container>
          {launchList.map((launch, index) => (
            <Card key={index} type="launch" data={launch} />
          ))}
        </Container>
      </S.Launch>
    </Error>
  );
}
