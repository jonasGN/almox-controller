import { ForwardRefRenderFunction } from "react";
import { ReactInputElement } from "@Types/elements";

export interface TextFieldProps extends ReactInputElement {
  name: string;
  label: string;
  prefix?: string;
  leadingElement?: React.ReactElement;
  trailingElement?: React.ReactElement;
  helperText?: string;

  leadingElementClassName?: string;
  trailingElementClassName?: string;
  customClassName?: string;
  textCounterElement?: React.ReactNode;
}

export type TextFieldForwardRef = ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
>;
