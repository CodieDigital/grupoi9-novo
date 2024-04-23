import { useState } from "react";

import { toast } from "react-toastify";

import { Error } from "codieweb/dist/cjs/components/data";

import { api } from "src/services/api";
import { useI18n } from "src/contexts/i18n";

import * as S from "./styles";

export function NewsLetter() {
  const { translate } = useI18n();
  const [formData, setFormData] = useState({ email: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Validate the email address
    if (!emailRegex.test(formData.email)) {
      toast.error(translate.dictionary["email-invalido"], {
        autoClose: 4000,
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const postData = { email: formData.email };
      const result = await api.post("/newsletter", postData);

      if (result.status === 200) {
        toast.success(translate.dictionary["newsletter-enviada-com-sucesso"], {
          autoClose: 4000,
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(translate.dictionary["erro-ao-enviar"], {
          autoClose: 4000,
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  return (
    <Error name="NewsLetter">
      <S.NewsLetter>
        <div className="text">
          <h3 className="title-3-bold">{translate.dictionary["newsletter"]}</h3>
        </div>

        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              className="paragraph-2-regular"
              type="email"
              placeholder={translate.dictionary["digite-seu-email"]}
              onChange={({ target }) => setFormData({ email: target.value })}
            />

            <button className="paragraph-2-regular" type="submit">
              {translate.dictionary["enviar"]}
            </button>
          </form>
        </div>
      </S.NewsLetter>
    </Error>
  );
}
