import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type InputEvent = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
type Value = string | ReadonlyArray<string> | number;
type Type = HTMLInputTypeAttribute;
type Prefix = "R$" | "uni";

export interface FormFieldProps {
  useTextArea?: boolean;
  name: string;
  type?: Type;
  label: string;
  placeholder: string;
  value?: Value;
  onChange?: InputEvent;
  prefix?: Prefix;
  maxLength?: number;
}
