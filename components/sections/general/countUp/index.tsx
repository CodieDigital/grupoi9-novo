import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { Container } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { IPageInformations } from "src/interfaces/pageInformations";

import * as S from "./styles";

interface ICountUpNumbers {
  data: IPageInformations;
  color?: 1 | 2;
}

export function CountUpNumbers({ data, color }: ICountUpNumbers) {
  const { translate } = useI18n();

  // console.log(parseFloat(data.papeisProduzidos.replace(/\./g, '')));
  return (
    <S.CountUpNumbers $color={color}>
      <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
        {({ isVisible }) =>
          isVisible ? (
            <Container>
              <div className="box-number">
                <CountUp
                  separator="."
                  start={0}
                  end={parseFloat(data.papeisProduzidos.replace(/\./g, ""))}
                  className="title-1 number"
                />

                <span className="text uppercase">
                  {translate.dictionary["papeis-produzidos"]}
                </span>
              </div>

              {/* <div className="box-number">
                <CountUp
                  start={0}
                  end={data.colaboradoresContratados}
                  className="title-1 number"
                />

                <span className="text">colaboradores contratados</span>
              </div> */}

              <div className="box-number">
                <CountUp
                  start={0}
                  separator="."
                  end={parseFloat(data.clientesSatisfeitos.replace(/\./g, ""))}
                  className="title-1 number"
                />

                <span className="text uppercase">
                  {translate.dictionary["clientes-satisfeitos"]}
                </span>
              </div>

              {/* <div className="box-number">
                <CountUp
                  start={0}
                  end={data.parceirosDistribuidores}
                  className="title-1 number"
                />

                <span className="text">parceiros e distribuidores</span>
              </div> */}
            </Container>
          ) : (
            <p className="title-1">&nbsp;</p>
          )
        }
      </VisibilitySensor>
    </S.CountUpNumbers>
  );
}
