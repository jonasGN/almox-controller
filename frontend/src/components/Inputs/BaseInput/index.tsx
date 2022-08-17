import { ReactInputElement } from "../../../@types/elements";
import { classNames } from "../../../utils/styles-helper";

import { ShowWhen } from "../../Layout";

import styles from "./styles.module.scss";

interface BaseInputProps extends ReactInputElement {
  name: string;
  leadingIcon?: React.ReactElement | string;
  trailingIcon?: React.ReactElement | string;
  customClassName?: string;
}

export const BaseInput = (props: BaseInputProps): JSX.Element => {
  const { name, leadingIcon, trailingIcon, customClassName, ...rest } = props;

  const classes = classNames(
    styles.baseInputContainer,
    customClassName!,
    leadingIcon! && styles.leading,
    trailingIcon! && styles.trailing
  );

  return (
    <span className={classes}>
      <ShowWhen condition={!!leadingIcon}>{leadingIcon}</ShowWhen>

      <input id={name} name={name} type={rest.type ?? "text"} {...rest} />

      <ShowWhen condition={!!trailingIcon}>{trailingIcon}</ShowWhen>
    </span>
  );
};
