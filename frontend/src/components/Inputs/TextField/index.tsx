import { ReactInputElement } from "../../../@types/elements";

import styles from "./styles.module.scss";

interface TextFieldProps extends ReactInputElement {
  name: string;
  label: string;
}

export const TextField = (props: TextFieldProps): JSX.Element => {
  const { name, label, ...rest } = props;

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input type={rest.type ?? "text"} id={name} name={name} {...rest} />
    </div>
  );
};
