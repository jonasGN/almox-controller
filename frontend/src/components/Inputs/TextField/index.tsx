import React, { ForwardRefRenderFunction, useState } from "react";
import { ReactInputElement } from "../../../@types/elements";

import { BaseInput } from "../BaseInput";
import { VisibilityIcon, VisibilityOffIcon } from "../../Icons";
import { IconButton } from "../../Buttons";
import { ShowWhen } from "../../../layout";

import styles from "./styles.module.scss";

interface TextFieldProps extends ReactInputElement {
  name: string;
  label: string;
  leadingIcon?: React.ReactElement | string;
  trailingIcon?: React.ReactElement | string;
  isPassword?: boolean;
  helperText?: string;
}

type ForwardRefFunction = ForwardRefRenderFunction<HTMLInputElement, TextFieldProps>;

const TextFieldBase: ForwardRefFunction = (props, ref): JSX.Element => {
  const {
    name,
    label,
    leadingIcon,
    trailingIcon,
    isPassword = false,
    helperText,
    ...rest
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const togglePasswordButton = (): JSX.Element => {
    return (
      <ShowWhen condition={rest.value !== ""}>
        <IconButton
          icon={isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          onClick={handlePasswordVisibility}
        />
      </ShowWhen>
    );
  };

  return (
    <BaseInput
      name={name}
      label={label}
      leadingIcon={leadingIcon}
      trailingIcon={isPassword ? togglePasswordButton() : trailingIcon}
      helperText={helperText}
    >
      <ShowWhen condition={isPassword}>
        <input
          ref={ref}
          type={!isPasswordVisible ? "password" : "text"}
          id={name}
          name={name}
          {...rest}
        />
      </ShowWhen>

      <ShowWhen condition={!isPassword}>
        <input ref={ref} id={name} name={name} {...rest} />
      </ShowWhen>
    </BaseInput>
  );
};

export const TextField = React.forwardRef(TextFieldBase);
