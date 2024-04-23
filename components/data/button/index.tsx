import { Button as ButtonCodie, ButtonProps } from "codiedigital";

import * as S from "./styles";

export function Button({ ...rest }: ButtonProps) {
  return (
    <S.Button>
      <ButtonCodie {...rest} />
    </S.Button>
  );
}
