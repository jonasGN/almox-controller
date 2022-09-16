import { classNames } from "@/utils/styles";

import { ShowWhen } from "@/layout";

import styles from "./styles.module.scss";

export interface BasicInputProps {
  name: string;
  label?: string;
  leadingIcon?: React.ReactElement | string;
  leadingIconClassName?: string;
  trailingIcon?: React.ReactElement | string;
  trailingIconClassName?: string;
  helperText?: string;
  customClassName?: string;
}

interface BaseInputProps extends BasicInputProps {
  children?: React.ReactNode;
}

export const BaseInput = (props: BaseInputProps): JSX.Element => {
  const {
    name,
    label,
    leadingIcon,
    trailingIcon,
    leadingIconClassName,
    trailingIconClassName,
    helperText,
    customClassName,
    children,
  } = props;

  const leadingIconClasses = leadingIcon
    ? classNames(styles.leading, leadingIconClassName!)
    : "";

  const trailingIconClasses = trailingIcon
    ? classNames(styles.trailing, trailingIconClassName!)
    : "";

  const classes = classNames(
    styles.inputContainer,
    customClassName!,
    leadingIconClasses,
    trailingIconClasses
  );

  return (
    <span className={styles.field}>
      <ShowWhen condition={!!label}>
        <label htmlFor={name}>{label}</label>
      </ShowWhen>

      <span className={classes}>
        <ShowWhen condition={!!leadingIcon}>{leadingIcon}</ShowWhen>
        {children}
        <ShowWhen condition={!!trailingIcon}>{trailingIcon}</ShowWhen>
      </span>

      <ShowWhen condition={!!helperText}>
        <p className={styles.helperText} aria-live="assertive">
          {helperText}
        </p>
      </ShowWhen>
    </span>
  );
};
