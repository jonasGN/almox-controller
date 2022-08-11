import { FormFieldProps } from "./FormFieldProps";

import styles from "./styles.module.scss";

export const TextAreaField = (props: FormFieldProps): JSX.Element => {
  return (
    <div className={styles.fieldContainer}>
      <textarea
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
        maxLength={props.maxLength}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};
