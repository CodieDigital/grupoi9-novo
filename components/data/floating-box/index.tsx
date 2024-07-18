import { useState } from "react";

import CountUp from "react-countup";

import { Icon, NextImage } from "codiedigital";

import { useI18n } from "src/contexts/i18n";

import { Button } from "components/data";
import { Close2Icon } from "components/icons";

import { IBoxFloating } from "./interfaces";

import * as S from "./styles";
import moment from "moment";

export function BoxFloating({
  numbers,
  children,
  modalPosition = "right",
  ...rest
}: IBoxFloating) {
  const { locale, translate } = useI18n();
  const [open, setOpen] = useState(false);

  function handleOpenBox() {
    setOpen(false);
  }

  function handleCloseBox() {
    setOpen(true);
  }

  const targetDate = moment("2024-07-17");
  const currentDate = moment();
  const differenceInDays = currentDate.diff(targetDate, "days");

  const number = Number(numbers?.replaceAll(".", ""));

  const counter = differenceInDays * 120000 + number;

  console.log(counter);

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

      {counter && (
        <>
          <div className="paper">
            <NextImage src="/images/cronometro.png" />
          </div>

          <div className="box-text">
            <CountUp separator="." start={0} end={counter} className="number" />

            <span
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  translate.dictionary["papeis-para-mechas-ja-fabricados"],
              }}
            />

            {locale === "pt" && (
              <Button
                className="link-1 button"
                href="https://lojapapelparamechas.com.br"
                text={translate.dictionary["quero-comprar"]}
                target="_blank"
              />
            )}
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
