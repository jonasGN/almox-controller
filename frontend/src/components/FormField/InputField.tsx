import { FormFieldProps } from "./FormFieldProps";

import styles from "./styles.module.scss";

export const InputField = (props: FormFieldProps): JSX.Element => {
  return (
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className={!props.prefix ? styles.input : ""}
    />
  );
};
