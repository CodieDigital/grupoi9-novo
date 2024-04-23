import { useRef, useState } from "react";

import router from "next/router";

import ReCAPTCHA from "react-google-recaptcha";

import { api } from "src/services/api";
import { useI18n } from "src/contexts/i18n";

import { Form, InputCep, FormHandles, YupValidation } from "components/inputs";

import {
  InputMask,
  InputComponent,
  TextAreaComponent,
} from "codieweb/dist/cjs/components/data/inputs";

import { Container } from "components/data";

import * as S from "./styles";

interface SubmitProps {
  cep: string;
  name: string;
  email: string;
  phone: string;
  numero: string;
  estado: string;
  bairro: string;
  mensagem: string;
  endereco: string;
  localidade: string; //cidade
}

export function FormClients() {
  const { translate } = useI18n();
  const [enable, setEnable] = useState(false);
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({
    cep,
    name,
    email,
    phone,
    bairro,
    numero,
    estado,
    mensagem,
    endereco,
    localidade,
  }: SubmitProps) {
    if (!enable) {
      return;
    }
    const Yup = await import("yup");

    try {
      const phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");
      const cepOnlyNumbers = cep?.replace(/[^0-9]/g, "");
      const numeroOnlyNumbers = numero?.replace(/[^0-9]/g, "");

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
        cep: Yup.string()
          .required(translate.dictionary["por-favor-insira-seu-cep"])
          .min(8, translate.dictionary["favor-inserir-um-cep-valido"]),
        numero: Yup.string().required(
          translate.dictionary["por-favor-insira-o-numero-do-seu-endereco"]
        ),
        mensagem: Yup.string().required(
          translate.dictionary["por-favor-escreva-sua-mensagem"]
        ),
      });

      await schema.validate(
        {
          name,
          email,
          phone: phoneOnlyNumbers,
          cep,
          numero: numeroOnlyNumbers,
          mensagem,
        },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      const response = await api.post("/lojacontact", {
        name,
        email,
        phone: phoneOnlyNumbers,
        cep: cepOnlyNumbers,
        endereco,
        bairro,
        localidade,
        numero: numeroOnlyNumbers,
        mensagem,
        estado,
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

  const radioOptions = [
    {
      option: "Sim",
    },
    {
      option: "Não",
    },
  ];

  return (
    <S.FormClients>
      <Container>
        <div className="titles">
          <h2 className="title-1-avianoFlare">
            {translate.dictionary["seja-um-distribuidor"]}
          </h2>

          <span
            className="paragraph-2"
            dangerouslySetInnerHTML={{
              __html:
                translate.dictionary[
                  "conheca-mais-sobre-os-nossos-produtos-e-se-torne-um-distribuidor-preencha-o-formulario-abaixo-que-entraremos-em-contato-o-mais-breve-possivel"
                ],
            }}
          />
        </div>

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
              label: translate.dictionary["nome-completo"] + "*",
              fontSizeFamilyLabel: "paragraph-2-bold",
            }}
          />

          <InputCep
            configs={{
              name: "cep",
              placeholder: translate.dictionary["digite-seu-cep-aqui"],
              id: "cep",
              formRef: formRef,
              label: translate.dictionary["cep"] + "*",
              fontSizeFamilyLabel: "paragraph-2-bold",
              hasBorder: true,
            }}
          >
            <InputComponent
              readOnly
              configs={{
                name: "localidade",
                type: "text",
                placeholder: translate.dictionary["digite-sua-cidade-aqui"],
                hasBorder: true,
                label: translate.dictionary["cidade"] + "*",
                fontSizeFamilyLabel: "paragraph-2-bold",
              }}
            />

            <InputComponent
              readOnly
              configs={{
                name: "estado",
                type: "text",
                placeholder: translate.dictionary["estado"],
                hasBorder: true,
                label: translate.dictionary["estado"] + "*",
                fontSizeFamilyLabel: "paragraph-2-bold",
              }}
            />

            <InputComponent
              readOnly
              configs={{
                name: "endereco",
                type: "text",
                placeholder: translate.dictionary["digite-seu-endereco-aqui"],
                hasBorder: true,
                label: translate.dictionary["endereco"] + "*",
                fontSizeFamilyLabel: "paragraph-2-bold",
              }}
            />

            <InputComponent
              readOnly
              configs={{
                name: "bairro",
                type: "text",
                placeholder: translate.dictionary["digite-seu-bairro-aqui"],
                hasBorder: true,
                label: translate.dictionary["bairro"] + "*",
                fontSizeFamilyLabel: "paragraph-2-bold",
              }}
            />

            <InputComponent
              configs={{
                name: "numero",
                type: "number",
                placeholder: translate.dictionary["digite-seu-logradouro-aqui"],
                hasBorder: true,
                label: translate.dictionary["numero"] + "*",
                fontSizeFamilyLabel: "paragraph-2-bold",
              }}
            />
          </InputCep>

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

          {/* <div className="radio-container">
            <h2 className="paragraph-2-bold">
              Você é cabelereiro profissional?*
            </h2>

            <InputRadioComponent options={radioOptions} name={'cabelereiro'} />
          </div> */}

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
      </Container>
    </S.FormClients>
  );
}
