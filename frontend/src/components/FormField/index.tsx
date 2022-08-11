import { FormFieldProps } from "./FormFieldProps";
import { multipleClasses } from "../../utils/styles-helper";

import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";

import styles from "./styles.module.scss";

export const FormField = (props: FormFieldProps): JSX.Element => {
  if (props.useTextArea) return <TextAreaField {...props} />;

  const withContainerClassName = multipleClasses(styles.prefixContainer, styles.input);

  const inputWithContainer = (
    <div className={withContainerClassName}>
      <span>{props.prefix}</span>
      <InputField {...props} />
    </div>
  );

  return (
    <div className={styles.fieldContainer}>
      {!props.prefix ? <InputField {...props} /> : inputWithContainer}
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};
