import { useRef, useState } from "react";

import router from "next/router";

import ReCAPTCHA from "react-google-recaptcha";

import { api } from "src/services/api";
import { useI18n } from "src/contexts/i18n";

import { Form, FormHandles, YupValidation } from "components/inputs";

import {
  InputMask,
  InputComponent,
  TextAreaComponent,
} from "codieweb/dist/cjs/components/data/inputs";

interface SubmitProps {
  name: string;
  email: string;
  phone: string;
  mensagem: string;
}

export function FormContact() {
  const { translate } = useI18n();
  const [enable, setEnable] = useState(false);
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({ name, email, phone, mensagem }: SubmitProps) {
    if (!enable) {
      return;
    }
    const Yup = await import("yup");

    try {
      const phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");

      const schema = Yup.object().shape({
        name: Yup.string().required(
          translate.dictionary["por-favor-insira-seu-nome"]
        ),
        email: Yup.string()
          .email(translate.dictionary["email-invalido"])
          .required(translate.dictionary["por-favor-insira-seu-email"]),
        phone: Yup.string()
          .required(translate.dictionary["por-favor-insira-seu-telefone"])
          .min(11, translate.dictionary["favor-inserir-um-numero-valido"]),
        mensagem: Yup.string().required(
          translate.dictionary["por-favor-escreva-sua-mensagem"]
        ),
      });

      await schema.validate(
        {
          name,
          email,
          phone: phoneOnlyNumbers,
          mensagem,
        },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      const response = await api.post("/form", {
        name,
        email,
        phone: phoneOnlyNumbers,
        mensagem,
      });

      if (response.status === 200) {
        router.push({
          pathname: "/contato/sucesso",
          query: { name },
        });
      }
    } catch (err) {
      YupValidation(Yup, err, formRef);
    }
  }

  function onChange() {
    setEnable(true);
  }

  return (
    <Form
      className="client-form"
      ref={formRef}
      onSubmit={handleSubmit}
      method="post"
    >
      <InputComponent
        configs={{
          name: "name",
          type: "text",
          placeholder: translate.dictionary["digite-seu-nome-aqui"],
          hasBorder: true,
          label: translate.dictionary["nome"] + "*",
          fontSizeFamilyLabel: "paragraph-2-bold",
        }}
      />

      <div className="box-inputs">
        <InputComponent
          configs={{
            name: "email",
            type: "text",
            placeholder: translate.dictionary["digite-seu-email-aqui"],
            hasBorder: true,
            label: translate.dictionary["email"] + "*",
            fontSizeFamilyLabel: "paragraph-2-bold",
          }}
        />

        <InputMask
          configs={{
            id: "phone",
            name: "phone",
            placeholder: translate.dictionary["ddd-9-99999999"],
            mask: "(99) 9 9999-9999",
            hasBorder: true,
            label: translate.dictionary["telefone"] + "*",
            fontSizeFamilyLabel: "paragraph-2-bold",
          }}
        />
      </div>

      <TextAreaComponent
        configs={{
          id: "mensagem",
          name: "mensagem",
          placeholder: translate.dictionary["digite-sua-mensagem-aqui"],
          hasBorder: true,
          label: translate.dictionary["mensagem"] + "*",
          fontSizeFamilyLabel: "paragraph-2-bold",
        }}
      />

      <div className="buttons">
        <ReCAPTCHA
          onChange={onChange}
          onExpired={() => setEnable(false)}
          sitekey="6Lc1v50mAAAAAJD0gheUQRt4YDHBfIclnF7M0GJA"
        />

        <button
          className="paragraph-1-bold button-form"
          disabled={!enable}
          type="submit"
        >
          {translate.dictionary["enviar"]}
        </button>
      </div>
    </Form>
  );
}
