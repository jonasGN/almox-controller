import React from "react";

import { TextFieldForwardRef } from "../TextFieldProps";
import { TextFieldBase } from "../TextFieldBase";

const TextFieldComponent: TextFieldForwardRef = (props, ref): JSX.Element => {
  const {
    name,
    label,
    prefix,
    leadingElement,
    trailingElement,
    helperText,
    leadingElementClassName,
    trailingElementClassName,
    customClassName,
    textCounterElement,
    ...rest
  } = props;

  const baseProps = {
    name,
    label,
    prefix,
    leadingElement,
    trailingElement,
    helperText,
    leadingElementClassName,
    trailingElementClassName,
    customClassName,
    textCounterElement,
  };

  return (
    <TextFieldBase {...baseProps}>
      <input {...rest} ref={ref} id={name} name={name} />
    </TextFieldBase>
  );
};

export const TextField = React.forwardRef(TextFieldComponent);
