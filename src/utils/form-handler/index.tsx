import { Button } from "components/data";

import {
  FormHandler as FormHandlerCodie,
  IFormHandler,
} from "codiedigital/dist";

const configsFormHandler = {
  ButtonComponent: Button,
};

export function FormHandler(props: Omit<IFormHandler, "ButtonComponent">) {
  return <FormHandlerCodie {...configsFormHandler} {...props} />;
}
