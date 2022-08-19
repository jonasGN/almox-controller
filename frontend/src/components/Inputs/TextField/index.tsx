import React, { useState } from "react";
import { ReactInputElement } from "../../../@types/elements";

import { Icon, VisibilityIcon, VisibilityOffIcon } from "../../Icons";
import { IconButton } from "../../Buttons";
import { ShowWhen } from "../../../layout";

import styles from "./styles.module.scss";

type MouseEvent = React.MouseEvent;

interface TextFieldProps extends ReactInputElement {
  name: string;
  label: string;
  icon?: Icon;
  onClickIcon?: (e: MouseEvent) => void;
}

export const TextField = (props: TextFieldProps): JSX.Element => {
  const { name, label, icon, onClickIcon, ...rest } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = (e: MouseEvent) => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.textFieldContainer}>
      <label htmlFor={name}>{label}</label>
      <span className={styles.inputContainer}>
        <ShowWhen condition={rest.type === "password"}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id={name}
            name={name}
            {...rest}
          />
        </ShowWhen>

        <ShowWhen condition={rest.type !== "password"}>
          <input type={rest.type ?? "text"} id={name} name={name} {...rest} />
        </ShowWhen>

        <ShowWhen condition={rest.type !== "password" && !!icon}>
          <IconButton icon={icon!} onClick={onClickIcon} />
        </ShowWhen>

        <ShowWhen condition={rest.type === "password" && !icon}>
          <ShowWhen condition={rest.value !== ""}>
            <IconButton
              icon={isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              onClick={handlePasswordVisibility}
            />
          </ShowWhen>
        </ShowWhen>
      </span>
    </div>
  );
};
