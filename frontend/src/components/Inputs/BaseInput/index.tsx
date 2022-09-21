import { ShowWhen } from "@/layout";
import { classNames } from "@/utils/styles";

import styles from "./styles.module.scss";

export interface BasicInputProps {
  name: string;
  label?: string;
  leadingElement?: React.ReactElement;
  leadingElementClassName?: string;
  trailingElement?: React.ReactElement;
  trailingElementClassName?: string;
  helperText?: string;
  customClassName?: string;
  textCounterElement?: React.ReactNode;
}

interface BaseInputProps extends BasicInputProps {
  children?: React.ReactNode;
}

export const BaseInput = (props: BaseInputProps): JSX.Element => {
  const {
    name,
    label,
    leadingElement,
    leadingElementClassName,
    trailingElement,
    trailingElementClassName,
    helperText,
    customClassName,
    textCounterElement,
    children,
  } = props;

  const leadingElementClasses = leadingElement
    ? classNames(styles.leading, leadingElementClassName!)
    : "";

  const trailingElementClasses = trailingElement
    ? classNames(styles.trailing, trailingElementClassName!)
    : "";

  const inputClasses = classNames(
    styles.input,
    customClassName!,
    leadingElementClasses,
    trailingElementClasses
  );

  return (
    <label htmlFor={name} className={styles.inputContainer}>
      <ShowWhen condition={!!label}>
        <span className={styles.label}>{label}</span>
      </ShowWhen>

      <span className={inputClasses}>
        <ShowWhen condition={!!leadingElement}>{leadingElement}</ShowWhen>
        {children}
        <ShowWhen condition={!!trailingElement}>{trailingElement}</ShowWhen>
        <span className={styles.container} />
      </span>

      <ShowWhen condition={!!helperText}>
        <p className={styles.helperText} aria-live="assertive">
          {helperText}
        </p>
      </ShowWhen>

      <ShowWhen condition={!!textCounterElement}>{textCounterElement}</ShowWhen>
    </label>
  );
};
