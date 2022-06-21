import styles from "./styles.module.scss";

type InputEvent = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
type Value = string | ReadonlyArray<string> | number;
type Type = React.HTMLInputTypeAttribute;
type Prefix = "R$" | "uni";

interface FormFieldProps {
  useTextArea?: boolean;
  name: string;
  type?: Type;
  label: string;
  placeholder: string;
  value?: Value;
  onChange?: InputEvent;
  prefix?: Prefix;
  maxLength?: number;
}

function TextAreaField(props: FormFieldProps) {
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
}

function InputField(props: FormFieldProps) {
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
}

export function FormField(props: FormFieldProps) {
  if (props.useTextArea) return <TextAreaField {...props} />;

  const inputWithContainer = (
    <div className={`${styles.prefixContainer} ${styles.input}`}>
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
}
