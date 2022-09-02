import React, { ForwardRefRenderFunction, useState } from "react";
import { ReactInputElement } from "../../../@types/elements";
import { classNames } from "../../../utils/styles-helper";

import { Icon, VisibilityIcon, VisibilityOffIcon } from "../../Icons";
import { IconButton } from "../../Buttons";
import { ShowWhen } from "../../../layout";

import styles from "./styles.module.scss";

type MouseEvent = React.MouseEvent;

type ForwardRefRenderInput = ForwardRefRenderFunction<HTMLInputElement, TextFieldProps>;

interface TextFieldProps extends ReactInputElement {
  name: string;
  label: string;
  trailingIcon?: Icon;
  assertiveText?: string;
  hasError?: boolean;
  inputType?: React.HTMLInputTypeAttribute;
  onClickTrailingIcon?: (e: MouseEvent) => void;
}

const TextFieldBase: ForwardRefRenderInput = (props, ref): JSX.Element => {
  const {
    name,
    label,
    trailingIcon,
    assertiveText,
    hasError = false,
    inputType = "text",
    onClickTrailingIcon,
    ...rest
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = (e: MouseEvent) => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputContainerClasses = classNames(
    styles.inputContainer,
    hasError ? styles.error : ""
  );

  return (
    <div className={styles.textFieldContainer}>
      <label htmlFor={name}>{label}</label>
      <span className={inputContainerClasses}>
        <ShowWhen condition={inputType === "password"}>
          <input
            ref={ref}
            type={isPasswordVisible ? "text" : "password"}
            id={name}
            name={name}
            {...rest}
          />
        </ShowWhen>

        <ShowWhen condition={inputType !== "password"}>
          <input ref={ref} type={inputType} id={name} name={name} {...rest} />
        </ShowWhen>

        <ShowWhen condition={inputType !== "password" && !!trailingIcon}>
          <IconButton icon={trailingIcon!} onClick={onClickTrailingIcon} />
        </ShowWhen>

        <ShowWhen condition={inputType === "password" && !trailingIcon}>
          <ShowWhen condition={rest.value !== ""}>
            <IconButton
              icon={isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              onClick={handlePasswordVisibility}
            />
          </ShowWhen>
        </ShowWhen>
      </span>

      <ShowWhen condition={hasError}>
        <p className={styles.errMsg} aria-live="assertive">
          {assertiveText}
        </p>
      </ShowWhen>
    </div>
  );
};

export const TextField = React.forwardRef(TextFieldBase);
