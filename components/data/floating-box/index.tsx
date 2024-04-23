import { useState } from "react";

import CountUp from "react-countup";

import { Icon, NextImage } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { Button } from "components/data";
import { Close2Icon } from "components/icons";

import { IBoxFloating } from "./interfaces";

import * as S from "./styles";

export function BoxFloating({
  numbers,
  children,
  modalPosition = "right",
  ...rest
}: IBoxFloating) {
  const { translate } = useI18n();
  const [open, setOpen] = useState(false);

  function handleOpenBox() {
    setOpen(false);
  }

  function handleCloseBox() {
    setOpen(true);
  }

  return (
    <S.BoxFloating
      className={"box-floating " + modalPosition}
      {...rest}
      $open={open}
    >
      <button
        className={`open-button ${modalPosition}`}
        onClick={handleOpenBox}
      >
        {modalPosition === "right" ? (
          <Icon name="NavLeftIcon" />
        ) : (
          <Icon name="NavRightIcon" />
        )}
      </button>

      {children && <div className="box-children">{children} </div>}

      {numbers && (
        <>
          <div className="paper">
            <NextImage src="/images/cronometro.png" />
          </div>

          <div className="box-text">
            <CountUp
              separator="."
              start={0}
              end={parseFloat(numbers.replace(/\./g, ""))}
              className="number"
            />

            <span
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  translate.dictionary["papeis-para-mechas-ja-fabricados"],
              }}
            />

            <Button
              className="link-1 button"
              href="https://lojapapelparamechas.com.br"
              text={translate.dictionary["quero-comprar"]}
              target="_blank"
            />
          </div>
        </>
      )}

      <button
        className={`close-button ${modalPosition}`}
        onClick={handleCloseBox}
      >
        <Close2Icon />
      </button>
    </S.BoxFloating>
  );
}
