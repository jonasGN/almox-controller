import type { ReactInputElement } from "@Types/elements";
import { ForwardRefRenderFunction } from "react";

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
