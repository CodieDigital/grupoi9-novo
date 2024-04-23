import { Button as ButtonCodie, ButtonProps } from "codiedigital";

import * as S from "./styles";

export function Button(props: ButtonProps) {
  return (
    <S.Button className="button">
      <ButtonCodie {...props} />
    </S.Button>
  );
}
