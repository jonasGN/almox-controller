import type { TextFieldForwardRef } from "../TextFieldProps";
import { forwardRef, useState } from "react";

import { TextFieldBase } from "../TextFieldBase";
import { ShowWhen } from "@/layout";
import { IconButton } from "@/components/Buttons";

const HideTextFieldBase: TextFieldForwardRef = (props, ref): JSX.Element => {
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordElement = (
    <ShowWhen condition={rest.value !== ""}>
      <IconButton
        icon={isPasswordVisible ? "visibility-off" : "visibility"}
        onClick={() => setIsPasswordVisible((prev) => !prev)}
      />
    </ShowWhen>
  );

  return (
    <TextFieldBase {...baseProps} trailingElement={togglePasswordElement}>
      <input
        {...rest}
        ref={ref}
        id={name}
        name={name}
        type={!isPasswordVisible ? "password" : "text"}
      />
    </TextFieldBase>
  );
};

export const HideTextField = forwardRef(HideTextFieldBase);
