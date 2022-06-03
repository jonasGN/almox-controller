import styles from "./styles.module.scss";

interface FormFieldProps {
  useTextArea?: boolean;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  label: string;
  placeholder: string;
  value?: string | ReadonlyArray<string> | number;
  onChange?: React.ChangeEventHandler;
  prefix?: "R$" | "uni";
}

export function FormField(props: FormFieldProps) {
  if (props.useTextArea) {
    return (
      <div className={styles.fieldContainer}>
        <textarea
          className={styles.input}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
        <label htmlFor={props.name}>{props.label}</label>
      </div>
    );
  }

  function renderInput(useInputClass: boolean) {
    return (
      <input
        className={useInputClass ? styles.input : ""}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    );
  }

  function renderInputContainer() {
    if (!props.prefix) return renderInput(true);
    return (
      <div className={`${styles.prefixContainer} ${styles.input}`}>
        <span>{props.prefix}</span>
        {renderInput(false)}
      </div>
    );
  }

  return (
    <div className={styles.fieldContainer}>
      {renderInputContainer()}
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}
